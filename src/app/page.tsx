import Image from 'next/image';
import type {Metadata} from 'next';
import Link from 'next/link';
import {contact, identity, projects} from '@/lib/profile';
import {Contact, CVLink, Footer, PortfolioShell} from '@/components/Portfolio';
import {Icon} from '@/components/Icons';
import {ProjectImage} from '@/components/ProjectGallery';
import {GitHubContributions} from '@/components/GitHubContributions';
import {portfolioOpenGraph} from '@/lib/site';

export const metadata: Metadata = {alternates: {canonical: '/'}, openGraph: {...portfolioOpenGraph, url: '/'}};

export default function Home() {
  return <PortfolioShell page="home"><main className="rp-shell" id="main-content" tabIndex={-1}>
    <section className="rp-hero"><p className="rp-eyebrow">Engineering, systems &amp; the work behind them</p><h1>Raey Maulana <span className="rp-name-end">Yunus<span className="rp-period">.</span></span></h1>
      <div className="rp-hero-grid"><div><p className="rp-role">{identity.headline}</p><div className="rp-socials" aria-label="Professional profiles">{(['github', 'linkedin'] as const).map(platform => <a key={platform} href={contact[platform]} target="_blank" rel="noopener noreferrer"><Image src={`/icons/${platform}.png`} alt="" width={20} height={20}/>{platform === 'github' ? 'GitHub' : 'LinkedIn'}<Icon name="external"/></a>)}</div></div>
        <div className="rp-intro"><p className="rp-intro-lead">I build web applications and shape the systems around them.</p><p className="rp-intro-copy">My work brings together software development, systems analysis, and project leadership. Here are a few projects, and the decisions behind them.</p><div className="rp-actions"><a href="#selected-work" className="rp-primary">Explore selected work<Icon name="down"/></a><CVLink/></div></div>
      </div>
    </section>
    <section className="rp-section" id="selected-work"><div className="rp-section-head"><div><p className="rp-eyebrow">01 / Selected work</p><h2>Products, platforms &amp; workflows.</h2></div><p className="rp-section-note">The problems, my contribution,<br/>and the decisions behind the work.</p></div>
      {projects.map((project, index) => <article className="rp-project" id={`work-${project.id}`} key={project.id}>
        <Link href={`/work/${project.id}`} aria-label={`Read ${project.name} case study`}><div className="rp-media"><ProjectImage imageKey={project.image} alt={`${project.name} application interface, ${project.data.toLowerCase()}.`} sizes="(max-width: 680px) 90vw, 650px"/><div className="rp-media-meta"><span>Original application UI</span><span>{project.data}</span></div></div></Link>
        <div><p className="rp-eyebrow"><span className="rp-red">0{index + 1}</span> / {project.kind}</p><h3><Link href={`/work/${project.id}`}>{project.name}</Link></h3><p className="rp-project-summary">{project.summary}</p><p className="rp-contribution"><strong>MY CONTRIBUTION / {project.role}</strong>{project.contribution}</p><div className="rp-project-stack">{project.stack}</div><Link className="rp-textlink" href={`/work/${project.id}`}>Read case study<Icon name="external"/></Link></div>
      </article>)}
    </section>
    <section className="rp-section" id="about"><div className="rp-about"><div><p className="rp-eyebrow">02 / Behind the work</p><h2>From the details<br/>to the <span className="rp-red">whole system.</span></h2></div><div className="rp-about-copy"><p>I’m a full-stack engineer and system architect. My work spans education platforms, business operations, and personal software products.</p><p>Some projects involve building an application independently. Others involve understanding users, defining business processes, and directing a team. Each case study makes my responsibilities clear.</p><div className="rp-tools">Next.js / NestJS / Laravel / TypeScript<br/>MySQL / PostgreSQL / Docker / VPS / CI/CD</div><CVLink label="More background · CV"/></div></div>
      <div className="rp-proof"><article><h3>Understanding the process</h3><p>Research and analysis connect the application to the people who use it.</p><a href="#work-parents">Parents Info<Icon name="down"/></a></article><article><h3>Connecting the system</h3><p>Architecture, data relationships, and the environment the software runs in.</p><a href="#work-labbkpi">labbkpi<Icon name="down"/></a></article><article><h3>Owning the delivery</h3><p>Product decisions, testing, release, and support as part of the work.</p><Link href="/work/tando">Tando<Icon name="external"/></Link></article></div>
    </section>
    <GitHubContributions/><Contact/><Footer/>
  </main></PortfolioShell>;
}
