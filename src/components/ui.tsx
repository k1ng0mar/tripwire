import type { ReactNode, SVGProps } from 'react'
import type { Status } from '../types/product'

export function Ic({ id, ...rest }: { id: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg className="ic" aria-hidden="true" {...rest}>
      <use href={`#i-${id}`} />
    </svg>
  )
}

export function IconSprite() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }} aria-hidden="true">
      <defs>
        <symbol id="i-grid" viewBox="0 0 24 24">
          <rect x="3.5" y="3.5" width="7" height="7" rx="1.8" />
          <rect x="13.5" y="3.5" width="7" height="7" rx="1.8" />
          <rect x="3.5" y="13.5" width="7" height="7" rx="1.8" />
          <rect x="13.5" y="13.5" width="7" height="7" rx="1.8" />
        </symbol>
        <symbol id="i-shield" viewBox="0 0 24 24">
          <path d="M12 3.2l7 2.8v5.2c0 4.6-3 7.6-7 9.3-4-1.7-7-4.7-7-9.3V6l7-2.8z" />
          <path d="M9 11.6l2.1 2.1 4-4.1" />
        </symbol>
        <symbol id="i-users" viewBox="0 0 24 24">
          <circle cx="9" cy="8.2" r="3.3" />
          <path d="M3.4 19.4c.6-3.3 2.8-5.1 5.6-5.1s5 1.8 5.6 5.1" />
          <circle cx="16.8" cy="9.2" r="2.6" />
          <path d="M16.2 14.6c2.5.3 4.1 1.8 4.6 4.4" />
        </symbol>
        <symbol id="i-cal" viewBox="0 0 24 24">
          <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
          <path d="M3.5 9.8h17M8 3v4M16 3v4" />
        </symbol>
        <symbol id="i-doc" viewBox="0 0 24 24">
          <path d="M7 3.5h6.6L18.5 8.4V19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5.5a2 2 0 0 1 2-2z" />
          <path d="M13.6 3.6V8.4h4.8M9.3 13.2h5.4M9.3 16.6h5.4" />
        </symbol>
        <symbol id="i-reg" viewBox="0 0 24 24">
          <path d="M7 3.5h6.6L18.5 8.4V19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5.5a2 2 0 0 1 2-2z" />
          <path d="M13.6 3.6V8.4h4.8" />
          <path d="M8.6 14.8l1.7-3 1.6 4 1.7-3.2 1.8 2.2" />
        </symbol>
        <symbol id="i-chart" viewBox="0 0 24 24">
          <path d="M4 20.5h16.5M6.8 20V12M11.5 20V6.5M16.2 20v-9.5" />
        </symbol>
        <symbol id="i-plug" viewBox="0 0 24 24">
          <path d="M9 7.5V3.8M15 7.5V3.8M6.5 7.5h11v3.8a5.5 5.5 0 0 1-11 0V7.5zM12 16.8v3.4" />
        </symbol>
        <symbol id="i-sliders" viewBox="0 0 24 24">
          <path d="M4 7.5h8.5M17.5 7.5H20M4 16.5h2.5M11.5 16.5H20" />
          <circle cx="15" cy="7.5" r="2.4" />
          <circle cx="9" cy="16.5" r="2.4" />
        </symbol>
        <symbol id="i-buoy" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="8.5" />
          <circle cx="12" cy="12" r="3.6" />
          <path d="M6 6l3.5 3.5M18 6l-3.5 3.5M18 18l-3.5-3.5M6 18l3.5-3.5" />
        </symbol>
        <symbol id="i-search" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="6.6" />
          <path d="M15.9 15.9L20.5 20.5" />
        </symbol>
        <symbol id="i-bell" viewBox="0 0 24 24">
          <path d="M6.2 10.2a5.8 5.8 0 0 1 11.6 0c0 3.9 1.4 5.3 1.9 6.3H4.3c.5-1 1.9-2.4 1.9-6.3z" />
          <path d="M10 19.7a2.2 2.2 0 0 0 4 0" />
        </symbol>
        <symbol id="i-chev-d" viewBox="0 0 24 24">
          <path d="M6.5 9.5l5.5 5.5 5.5-5.5" />
        </symbol>
        <symbol id="i-chev-r" viewBox="0 0 24 24">
          <path d="M9.5 6l6 6-6 6" />
        </symbol>
        <symbol id="i-arrow-r" viewBox="0 0 24 24">
          <path d="M4.5 12H19M13.5 6.5L19 12l-5.5 5.5" />
        </symbol>
        <symbol id="i-alert" viewBox="0 0 24 24">
          <path d="M12 4.4L3.4 19.2h17.2L12 4.4z" />
          <path d="M12 10.2v3.9M12 16.9v.01" />
        </symbol>
        <symbol id="i-clock" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7.4V12l3 2" />
        </symbol>
        <symbol id="i-check" viewBox="0 0 24 24">
          <path d="M5 12.6l4.4 4.4L19 7.4" />
        </symbol>
        <symbol id="i-x" viewBox="0 0 24 24">
          <path d="M6 6l12 12M18 6L6 18" />
        </symbol>
        <symbol id="i-upload" viewBox="0 0 24 24">
          <path d="M12 15.5V5M7.5 9.5L12 5l4.5 4.5M4.5 16.5v1.8a2.2 2.2 0 0 0 2.2 2.2h10.6a2.2 2.2 0 0 0 2.2-2.2v-1.8" />
        </symbol>
        <symbol id="i-building" viewBox="0 0 24 24">
          <path d="M6 20.5V5.3A1.8 1.8 0 0 1 7.8 3.5h6.9A1.8 1.8 0 0 1 16.5 5.3v15.2M16.5 9.5h1.7A1.8 1.8 0 0 1 20 11.3v9.2M3.5 20.5h17M9.3 7.3h.01M12.9 7.3h.01M9.3 10.7h.01M12.9 10.7h.01M9.3 14.1h.01M12.9 14.1h.01" />
        </symbol>
        <symbol id="i-umbrella" viewBox="0 0 24 24">
          <path d="M12 3.6a8.6 8.6 0 0 1 8.6 8.6H3.4A8.6 8.6 0 0 1 12 3.6z" />
          <path d="M12 12.2v5.6a2.1 2.1 0 0 0 4.2 0M12 3.6v-1" />
        </symbol>
        <symbol id="i-filter" viewBox="0 0 24 24">
          <path d="M4 6.5h16M7.2 12h9.6M10.4 17.5h3.2" />
        </symbol>
      </defs>
    </svg>
  )
}

export function Pill({ tone = 'neutral', children }: { tone?: Status | 'brand'; children: ReactNode }) {
  const cls = tone === 'neutral' ? 'pill' : `pill ${tone}`
  return (
    <span className={cls}>
      <span className="dot" />
      {children}
    </span>
  )
}

export function SevChip({ tone, icon }: { tone: Status | 'brand'; icon: string }) {
  return (
    <span className={`sev-chip ${tone}`}>
      <Ic id={icon} />
    </span>
  )
}
