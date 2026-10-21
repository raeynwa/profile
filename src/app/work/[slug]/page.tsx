import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {getProject, projects} from '@/lib/profile';
import {ProjectCase} from '@/components/Portfolio';
import {portfolioOpenGraph, socialImage} from '@/lib/site';

export function generateStaticParams() {return projects.map(project => ({slug: project.id}));}
export const dynamicParams = false;
export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
  const {slug} = await params;
  const project = getProject(slug);
  if (!project) return {title: 'Project not found'};
  return {title: `${project.name} — Case study`, description: project.summary, alternates: {canonical: `/work/${project.id}`}, openGraph: {...portfolioOpenGraph, title: `${project.name} — Case study`, description: project.summary, url: `/work/${project.id}`, type: 'article'}, twitter: {card: 'summary_large_image', title: `${project.name} — Case study`, description: project.summary, images: [socialImage]}};
}
export default async function CaseStudyPage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return <ProjectCase project={project}/>;
}
