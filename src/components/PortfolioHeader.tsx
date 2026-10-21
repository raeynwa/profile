'use client';
import Link from 'next/link';
import {useRef, useState} from 'react';
import {cvUrl, identity} from '@/lib/profile';
import {Icon} from './Icons';

export function PortfolioHeader({home = false}: {home?: boolean}) {
  const [open, setOpen] = useState(false);
  const menu = useRef<HTMLButtonElement>(null);
  return <div className="rp-shell"><header className="rp-header" data-menu={open ? 'open' : 'closed'} onKeyDown={event => {
    if (event.key === 'Escape' && open) {setOpen(false); menu.current?.focus();}
  }}>
    <Link href="/" className="rp-brand" aria-label={`${identity.name}, homepage`} onClick={() => setOpen(false)}><span className="rp-brand-mark" aria-hidden="true"/>{identity.name}</Link>
    <button ref={menu} type="button" className="rp-menu" aria-expanded={open} aria-controls="portfolio-navigation" onClick={() => setOpen(!open)}><Icon name={open ? 'close' : 'menu'}/>Menu</button>
    <nav className="rp-nav" id="portfolio-navigation" aria-label="Portfolio navigation">
      {['Work', 'About', 'Activity', 'Contact'].map((label, index) => <Link key={label} href={`${home ? '' : '/'}#${['selected-work', 'about', 'activity', 'contact'][index]}`} onClick={() => setOpen(false)}>{label}</Link>)}
      <a className="rp-cv" href={cvUrl} download>CV<Icon name="down"/></a>
    </nav>
  </header></div>;
}
