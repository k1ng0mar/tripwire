import type { ReactNode } from 'react'
import type { Company, ScreenId } from '../types/product'
import { Ic } from './ui'

const PRIMARY_NAV = [
  { id: 'overview' as const, label: 'Overview', icon: 'grid' },
  { id: 'compliance' as const, label: 'Compliance', icon: 'shield' },
  { id: 'employees' as const, label: 'Employees', icon: 'users' },
  { id: 'deadlines' as const, label: 'Deadlines', icon: 'cal' },
  { id: 'documents' as const, label: 'Documents', icon: 'doc' },
  { id: 'regulations' as const, label: 'Regulations', icon: 'reg' },
]

const WORKSPACE_NAV = [
  { title: 'Reports', label: 'Reports', icon: 'chart' },
  { title: 'Integrations', label: 'Integrations', icon: 'plug' },
  { title: 'Settings', label: 'Settings', icon: 'sliders' },
]

const FOOTER_NAV = [
  { title: 'Help & Support', label: 'Help & Support', icon: 'buoy' },
  { title: 'Company profile', label: 'Company profile', icon: 'building' },
]

export function Shell({
  screen,
  stubTitle,
  company,
  companies,
  companyMenuOpen,
  bellOpen,
  searchQuery,
  toast,
  onNavigate,
  onCompanyMenu,
  onSelectCompany,
  onBell,
  onSearch,
  children,
}: {
  screen: ScreenId
  stubTitle: string
  company: Company
  companies: Company[]
  companyMenuOpen: boolean
  bellOpen: boolean
  searchQuery: string
  toast: string | null
  onNavigate: (screen: ScreenId, stubTitle?: string) => void
  onCompanyMenu: (open: boolean) => void
  onSelectCompany: (company: Company) => void
  onBell: (open: boolean) => void
  onSearch: (query: string) => void
  children: ReactNode
}) {
  const isPrimaryActive = (id: ScreenId) => screen === id && screen !== 'stub'
  const isStubActive = (title: string) => screen === 'stub' && stubTitle === title

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <svg className="mark" viewBox="0 0 28 28" aria-hidden="true">
            <rect width="28" height="28" rx="7.5" fill="#19222E" />
            <path
              d="M4.5 17.5c4.2 0 4.6-7 9.5-7s5.3 7 9.5 7"
              fill="none"
              stroke="#7FC4BB"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <circle cx="14" cy="10.5" r="2.1" fill="#2FBFAE" />
          </svg>
          <span className="wordmark">Tripwire</span>
        </div>

        <nav className="nav" aria-label="Primary">
          {PRIMARY_NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`nav-item${isPrimaryActive(item.id) ? ' is-active' : ''}`}
              onClick={() => onNavigate(item.id)}
            >
              <Ic id={item.icon} />
              <span className="n-label">{item.label}</span>
            </button>
          ))}

          <div className="nav-label">Workspace</div>
          {WORKSPACE_NAV.map((item) => (
            <button
              key={item.title}
              type="button"
              className={`nav-item${isStubActive(item.title) ? ' is-active' : ''}`}
              onClick={() => onNavigate('stub', item.title)}
            >
              <Ic id={item.icon} />
              <span className="n-label">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="side-foot">
          {FOOTER_NAV.map((item) => (
            <button
              key={item.title}
              type="button"
              className={`nav-item${isStubActive(item.title) ? ' is-active' : ''}`}
              onClick={() => onNavigate('stub', item.title)}
            >
              <Ic id={item.icon} />
              <span className="n-label">{item.label}</span>
            </button>
          ))}
          <button type="button" className="user-card" onClick={() => onNavigate('stub', 'Account')}>
            <span className="avatar">FA</span>
            <span className="u-txt">
              <span className="u-name">Fahad Al-Harbi</span>
              <span className="u-role">Operations Manager</span>
            </span>
          </button>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div className="menu-anchor">
            <button
              type="button"
              className="company-btn"
              aria-haspopup="menu"
              aria-expanded={companyMenuOpen}
              onClick={() => onCompanyMenu(!companyMenuOpen)}
            >
              <Ic id="building" className="ic-muted" />
              <span>
                <span className="c-name">{company.name}</span>
                <span className="c-meta">{company.cr}</span>
              </span>
              <Ic id="chev-d" className="ic-sm ic-faint" />
            </button>
            {companyMenuOpen && (
              <div className="menu open" role="menu">
                <div className="m-head">Your companies</div>
                {companies.map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    className={`m-item${item.name === company.name ? ' is-current' : ''}`}
                    role="menuitem"
                    onClick={() => onSelectCompany(item)}
                  >
                    <Ic id="check" className={item.name === company.name ? '' : 'ic-hidden'} />
                    <span>
                      <span className="m-name">{item.name}</span>
                      <span className="m-sub">{item.meta}</span>
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <span className="spacer" />

          <div className="search">
            <Ic id="search" />
            <input
              type="search"
              placeholder="Search deadlines, employees, documents"
              aria-label="Search"
              value={searchQuery}
              onChange={(event) => onSearch(event.target.value)}
            />
            <span className="kbd">⌘K</span>
          </div>

          <div className="menu-anchor">
            <button
              type="button"
              className="icon-btn"
              aria-label="Notifications"
              aria-haspopup="menu"
              aria-expanded={bellOpen}
              onClick={() => onBell(!bellOpen)}
            >
              <Ic id="bell" />
              <span className="ndot" />
            </button>
            {bellOpen && (
              <div className="menu right open menu-wide" role="menu">
                <div className="m-head">Notifications</div>
                <button
                  type="button"
                  className="m-item"
                  onClick={() => {
                    onNavigate('issue')
                    onBell(false)
                  }}
                >
                  <Ic id="alert" className="ic-danger" />
                  <span>
                    <span className="m-name">Nitaqat quota at risk</span>
                    <span className="m-sub">High risk · 23 days remaining</span>
                  </span>
                </button>
                <button
                  type="button"
                  className="m-item"
                  onClick={() => {
                    onNavigate('deadlines')
                    onBell(false)
                  }}
                >
                  <Ic id="clock" className="ic-warn" />
                  <span>
                    <span className="m-name">VAT filing due in 12 days</span>
                    <span className="m-sub">Deadline · September 23</span>
                  </span>
                </button>
                <button
                  type="button"
                  className="m-item"
                  onClick={() => {
                    onNavigate('documents')
                    onBell(false)
                  }}
                >
                  <Ic id="doc" className="ic-warn" />
                  <span>
                    <span className="m-name">Commercial registration renewal</span>
                    <span className="m-sub">Expiring · October 9</span>
                  </span>
                </button>
              </div>
            )}
          </div>

          <button
            type="button"
            className="avatar"
            aria-label="Account — Fahad Al-Harbi"
            onClick={() => onNavigate('stub', 'Account')}
          >
            FA
          </button>
        </header>

        <div className="pages">{children}</div>
      </main>

      {toast && (
        <div className="toast" role="status">
          {toast}
        </div>
      )}
    </div>
  )
}
