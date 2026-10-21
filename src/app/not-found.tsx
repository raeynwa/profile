import Link from 'next/link';
import type {Metadata} from 'next';
import {Footer, PortfolioShell} from '@/components/Portfolio';
export const metadata: Metadata = {title: 'Page not found', robots: {index: false, follow: true}};
export default function NotFound() {return <PortfolioShell page="not-found"><main id="main-content" className="rp-shell" tabIndex={-1}><section className="rp-hero"><p className="rp-eyebrow">404 / Page not found</p><h1>This page isn’t here<span className="rp-period">.</span></h1><div className="rp-actions"><Link href="/" className="rp-primary">Back to the portfolio</Link></div></section><Footer/></main></PortfolioShell>;}
