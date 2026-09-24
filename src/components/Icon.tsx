const paths = {
  book: <><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" /><path d="M4 19V5" /><path d="M9 7h6" /></>,
  bowl: <><path d="M3 11h18a9 9 0 0 1-18 0z" /><path d="M8 4c0 1.5 1 1.5 1 3M12 3c0 1.5 1 1.5 1 3M16 4c0 1.5 1 1.5 1 3" /></>,
  heart: <path d="M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.8-8 11-8 11z" />,
  people: <><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0" /><circle cx="17" cy="9" r="2.5" /><path d="M16 14.2A5 5 0 0 1 21 19" /></>,
  sprout: <><path d="M12 21v-9" /><path d="M12 12c0-4 3-6 7-6 0 4-3 6-7 6z" /><path d="M12 15c0-3-2-5-6-5 0 3 2 5 6 5z" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></>,
  school: <><path d="M3 10l9-5 9 5-9 5z" /><path d="M7 12.5V17c0 1 2.2 2 5 2s5-1 5-2v-4.5" /></>,
  pencil: <><path d="M4 20l1-4L16 5l3 3L8 19z" /><path d="M14 7l3 3" /></>,
  handshake: <><path d="M3 12l4-4 4 1 3-2 4 3 3 2" /><path d="M7 8v7l4 3 3-2 4-1 3-3" /><path d="M11 9l3 3" /></>,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  pin: <><path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
};

export type IconName = keyof typeof paths;

export function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
