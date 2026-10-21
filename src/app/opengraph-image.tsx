import {ImageResponse} from 'next/og';
import {identity} from '@/lib/profile';

export const alt = `${identity.name} — web applications, systems architecture, and selected work`;
export const size = {width: 1200, height: 630};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%', height: '100%', background: '#050505', color: '#f1f2f3', padding: '64px 72px'}}>
      <div style={{display: 'flex', alignItems: 'center', gap: 18, fontSize: 22, letterSpacing: 3, color: '#a4a7ab'}}><div style={{width: 7, height: 26, background: '#ed5b5b'}}/>ENGINEERING / SYSTEMS / SELECTED WORK</div>
      <div style={{display: 'flex', flexDirection: 'column', fontSize: 86, lineHeight: 1.05, fontWeight: 700, letterSpacing: -4}}><span>Raey Maulana</span><div style={{display: 'flex'}}>Yunus<span style={{color: '#ed5b5b'}}>.</span></div></div>
      <div style={{display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #352828', paddingTop: 24, fontSize: 23}}><span>Full-Stack Engineer &amp; System Architect</span><span style={{color: '#ed5b5b'}}>raeynwa.my.id</span></div>
    </div>, size,
  );
}
