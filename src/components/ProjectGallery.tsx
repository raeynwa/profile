'use client';
import Image from 'next/image';
import {useEffect, useId, useRef, useState} from 'react';
import imageAssets from '@/lib/project-images.json';
import type {GalleryView} from '@/lib/profile';
import {Icon} from './Icons';

export function ProjectImage({imageKey, alt, priority = false, sizes = '(max-width: 680px) 90vw, 1200px'}: {imageKey: string; alt: string; priority?: boolean; sizes?: string}) {
  const asset = imageAssets[imageKey as keyof typeof imageAssets];
  return <Image {...asset} alt={alt} priority={priority} sizes={sizes}/>;
}

export function Screenshot({imageKey, title, caption, phone = false, real = false, priority = false, triggerLabel}: {imageKey: string; title: string; caption: string; phone?: boolean; real?: boolean; priority?: boolean; triggerLabel?: string}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement>(null);
  const previousOverflow = useRef<string | null>(null);
  const id = useId();
  function restoreScroll() {if (previousOverflow.current !== null) {document.body.style.overflow = previousOverflow.current; previousOverflow.current = null;}}
  function close() {dialog.current?.close(); restoreScroll(); opener.current?.focus();}
  useEffect(() => () => {if (previousOverflow.current !== null) document.body.style.overflow = previousOverflow.current;}, []);
  const alt = `${title}, original application interface, ${real ? 'real local data' : 'fictional data'}.`;
  function open() {previousOverflow.current = document.body.style.overflow; dialog.current?.showModal(); document.body.style.overflow = 'hidden';}
  return <>
    {triggerLabel ? <button ref={opener} type="button" className="rp-textlink" aria-haspopup="dialog" onClick={open}>{triggerLabel}<Icon name="external"/></button> : <figure className={phone ? 'rp-gallery-phone' : undefined}>
      <button ref={opener} type="button" className="rp-image-button" aria-label={`Open ${title} screenshot`} aria-haspopup="dialog" onClick={open}><ProjectImage imageKey={imageKey} alt={alt} priority={priority} sizes={phone ? '300px' : undefined}/></button>
      <figcaption><span>{caption}</span><span aria-hidden="true">Open image ↗</span></figcaption>
    </figure>}
    <dialog ref={dialog} className="rp-lightbox" aria-labelledby={id} onClose={restoreScroll} onCancel={() => {restoreScroll(); opener.current?.focus();}} onClick={event => {
      if (event.target === event.currentTarget) {const box = event.currentTarget.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) close();}
    }}>
      <div className="rp-lightbox-head"><span id={id}>{title}</span><button type="button" className="rp-lightbox-close" onClick={close}>Close<Icon name="close"/></button></div>
      <div className="rp-lightbox-content"><ProjectImage imageKey={imageKey} alt={alt}/></div>
      <p className="rp-lightbox-caption">{real ? 'Real local application, captured with the owner’s permission.' : 'Original application interface. Fictional data prepared for this portfolio.'}</p>
    </dialog>
  </>;
}

export function ProjectGallery({project, title, views, disclosure}: {project: string; title: string; views: GalleryView[]; disclosure: string}) {
  const [selected, setSelected] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();
  const tando = project === 'Tando';
  return <section className={`rp-tour ${tando ? '' : 'rp-project-gallery'}`}>
    <div className="rp-tour-top"><div><p className="rp-eyebrow">05 / Inside the application</p><h2>{title}</h2></div>
      <div className="rp-tour-tabs" role="tablist" aria-label={`${project} application views`}>
        {views.map((view, index) => <button key={view.id} ref={element => {tabs.current[index] = element;}} className="rp-tour-tab" type="button" role="tab" id={`${id}-tab-${index}`} aria-controls={`${id}-panel-${index}`} aria-selected={selected === index} tabIndex={selected === index ? 0 : -1} onClick={() => setSelected(index)} onKeyDown={event => {
          const next = event.key === 'ArrowRight' ? (index + 1) % views.length : event.key === 'ArrowLeft' ? (index - 1 + views.length) % views.length : event.key === 'Home' ? 0 : event.key === 'End' ? views.length - 1 : null;
          if (next !== null) {event.preventDefault(); setSelected(next); tabs.current[next]?.focus();}
        }}>{view.label}</button>)}
      </div>
    </div>
    {views.map((view, index) => <div key={view.id} role="tabpanel" id={`${id}-panel-${index}`} aria-labelledby={`${id}-tab-${index}`} hidden={selected !== index}>
      <p className="rp-tour-copy">{view.copy}</p>
      <div className={tando && view.id === 'verification' ? 'rp-verify-pair' : tando && view.id === 'lifecycle' ? 'rp-phone-pair' : undefined}>
        <Screenshot imageKey={view.key} title={view.title} caption={view.caption} phone={view.phone && !(tando && view.id === 'lifecycle')} real={project === 'Tim AI Hermes'}/>
        {tando && view.id === 'verification' && <Screenshot imageKey="tando-mobile" title="Mobile verification" caption="The recipient’s phone view."/>}
        {tando && view.id === 'lifecycle' && <Screenshot imageKey="tando-revoked" title="Revoked verification" caption="The issuer has withdrawn it."/>}
      </div>
      {tando && view.id === 'issuance' && <div className="rp-tour-detail"><p>Each QR points to its own verification context.</p><Screenshot imageKey="tando-qr" title="Issued QR result" caption="Each QR points to its own verification context." triggerLabel="View QR result"/></div>}
    </div>)}
    <p className="rp-disclosure">{disclosure}</p>
  </section>;
}
