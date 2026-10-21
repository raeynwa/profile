import type {MetadataRoute} from 'next';
import {projects} from '@/lib/profile';
import {siteUrl} from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', ...projects.map(project => `/work/${project.id}`)].map(path => ({url: new URL(path, siteUrl).href}));
}
