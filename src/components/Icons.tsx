export type IconName = 'arrow' | 'external' | 'down' | 'back' | 'close' | 'menu' | 'clock';
export function Icon({name, className = ''}: {name: IconName; className?: string}) {
  const paths = {
    arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
    external: <path d="M7 17 17 7M7 7h10v10" />,
    down: <path d="M7 7 17 17M7 17h10V7" />,
    back: <path d="M20 12H4m6-6-6 6 6 6" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  };
  return <svg className={`rp-icon ${className}`} width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
