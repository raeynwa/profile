import Link from 'next/link';
import type {ReactNode} from 'react';
import {contact, cvUrl, identity, projects, type CaseStudy} from '@/lib/profile';
import {Icon} from './Icons';
import {PortfolioHeader} from './PortfolioHeader';
import {ProjectGallery, Screenshot} from './ProjectGallery';

export function PortfolioShell({page, children}: {page: string; children: ReactNode}) {
  return <div id="portfolio"><div className="rp-stage" data-page={page}><div className="rp-site">
    <a href="#main-content" className="rp-skip">Skip to content</a>
    <PortfolioHeader home={page === 'home'}/>{children}
  </div></div></div>;
}
export function CVLink({label = 'Download CV'}: {label?: string}) {return <a href={cvUrl} download className="rp-textlink">{label}<Icon name="down"/></a>;}
export function Contact() {
  return <section className="rp-contact" id="contact"><div><p className="rp-eyebrow">A conversation starts here</p><h2>Have an idea or a <span className="rp-red">collaboration</span> in mind?</h2><p>Let’s talk it through.</p></div><div>
    <a className="rp-contact-address" href={`mailto:${contact.email}`}>{contact.email}<Icon name="external"/></a>
    <div className="rp-contact-links"><a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp<Icon name="external"/></a><a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn<Icon name="external"/></a></div>
  </div></section>;
}
export function Footer() {return <footer className="rp-footer"><span>{identity.name}</span><span>Personal portfolio / 2026</span></footer>;}
function CaseSection({number, label, title, children}: {number: string; label: string; title: string; children: ReactNode}) {
  return <section className="rp-case-section"><div><p className="rp-eyebrow">{number} / {label}</p><h2>{title}</h2></div><div className="rp-prose">{children}</div></section>;
}
export function ProjectCase({project: p}: {project: CaseStudy}) {
  const next = projects[(projects.findIndex(project => project.id === p.id) + 1) % projects.length];
  return <PortfolioShell page={p.id}><main id="main-content" className="rp-shell" tabIndex={-1}>
    <section className="rp-case-hero"><Link href="/#selected-work" className="rp-back"><Icon name="back"/>All selected work</Link>
      <div className="rp-case-title"><p className="rp-eyebrow">Case study / {p.kind}</p><h1>{p.name}<span className="rp-period">.</span></h1><p className="rp-case-deck">{p.deck}</p><p className="rp-case-intro">{p.intro}</p></div>
      <dl className="rp-facts"><div><dt>My role</dt><dd>{p.role}</dd></div><div><dt>Technology</dt><dd>{p.stack}</dd></div><div><dt>Project context</dt><dd>{p.kind}</dd></div></dl>
      {(p.liveUrl || p.demo) && <div className="rp-project-access">
        <div className="rp-actions">
          {p.liveUrl && <a className="rp-textlink rp-live-project" href={p.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${p.name} live project (opens in a new tab)`}>Visit live project<Icon name="external"/></a>}
          {p.demo && <button className="rp-demo" type="button" disabled><Icon name="clock"/>Demo in preparation</button>}
        </div>
        {(p.liveAccessNote || p.demo) && <p className="rp-access-note">{p.liveAccessNote || (p.id === 'tando' ? 'Used in my own document workflow.' : 'Client platform in use.')}</p>}
      </div>}
    </section>
    <div className="rp-case-cover"><Screenshot imageKey={p.image} title={`${p.name} application view`} caption={p.cover} real={p.id === 'hermes'} priority/></div>
    <CaseSection number="01" label={p.name} title="The starting point">{p.problem.map(copy => <p key={copy}>{copy}</p>)}</CaseSection>
    <CaseSection number="02" label={p.name} title="My contribution"><div className="rp-ownership">{p.ownership.map(([title, copy]) => <div key={title}><h3>{title}</h3><p>{copy}</p></div>)}</div><p className="rp-ai-note">{p.boundary}</p></CaseSection>
    <section className="rp-flow"><p className="rp-eyebrow">03 / {p.id === 'tando' ? 'The verification flow' : 'The workflow'}</p><h2>{p.flowTitle}</h2><ol>{p.flow.map(([title, copy], index) => <li key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></li>)}</ol></section>
    <CaseSection number="04" label={p.name} title={p.decisionTitle}>{p.decisions.map(([title, copy]) => <div className="rp-decision" key={title}><h3>{title}</h3><p>{copy}</p></div>)}</CaseSection>
    <ProjectGallery project={p.name} title={p.galleryTitle} views={p.gallery} disclosure={p.disclosure}/>
    <CaseSection number="06" label={p.name} title="Outcome & scope"><p>{p.outcome}</p><p className="rp-scope">{p.scope}</p></CaseSection>
    <nav className="rp-case-nav" aria-label="Case study navigation"><Link className="rp-textlink" href="/#selected-work"><Icon name="back"/>All selected work</Link><Link className="rp-textlink" href={`/work/${next.id}`}>Next / {next.name}<Icon name="arrow"/></Link></nav>
    <Contact/><Footer/>
  </main></PortfolioShell>;
}
