import type { Company, Health, AlertItem, TimelineEvent, AreaItem, ScreenId } from '../types/product'
import { Ic, Pill, SevChip } from '../components/ui'
import { AreaRow } from '../components/AreaRow'
import { severityIcon } from '../lib/labels'

export function OverviewPage({
  company,
  health,
  alerts,
  timeline,
  areas,
  onNavigate,
}: {
  company: Company
  health: Health
  alerts: AlertItem[]
  timeline: TimelineEvent[]
  areas: AreaItem[]
  onNavigate: (screen: ScreenId) => void
}) {
  return (
    <>
      <div className="page-head">
        <div className="micro-label">
          {health.dateLabel.replace('Al Noor Trading Co.', company.name)}
        </div>
        <h1>Your compliance status</h1>
        <p className="status-line">
          {health.statusLine} <strong>{health.statusStrong}</strong> {health.statusTail}
        </p>
      </div>

      <div className="card panel health">
        <div className="health-head">
          <div>
            <div className="micro-label">Compliance Health</div>
            <div className="health-score">
              <span className="num">{health.score}</span>
              <span className="den">/100</span>
              <Pill tone="good">{health.delta}</Pill>
            </div>
          </div>
          <div className="health-note">{health.note}</div>
        </div>
        <div
          className="gauge"
          role="img"
          aria-label={`Compliance health ${health.score} out of 100 — healthy zone, two items in watch`}
        >
          <div className="gauge-fill" style={{ width: `${health.score}%` }} />
          <span className="gauge-tick" style={{ left: '60%' }} />
          <span className="gauge-tick" style={{ left: '80%' }} />
        </div>
        <div className="gauge-scale">
          <span className="s1">At risk</span>
          <span className="s2">Watch</span>
          <span className="s3">Healthy</span>
        </div>
      </div>

      <div className="panel-head section-head">
        <h2>Needs attention</h2>
        <span className="p-meta">2 issues · 1 renewal · sorted by severity</span>
        <button type="button" className="p-link" onClick={() => onNavigate('compliance')}>
          All compliance areas
        </button>
      </div>

      <div className="alert-grid">
        {alerts.map((alert) => (
          <article
            key={alert.id}
            className={`alert${alert.severity === 'danger' ? ' is-danger' : ''}`}
          >
            <div className="alert-top">
              <SevChip tone={alert.severity} icon={severityIcon(alert.kind, alert.severity)} />
              <div>
                <div className="alert-kind">{alert.kind}</div>
                <h3>{alert.title}</h3>
              </div>
            </div>
            <p>{alert.body}</p>
            <div className="alert-foot">
              <Pill tone={alert.severity}>{alert.daysLabel}</Pill>
              <button
                type="button"
                className="btn btn-quiet"
                onClick={() => onNavigate(alert.goto)}
              >
                {alert.actionLabel} <Ic id="arrow-r" />
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="two-col">
        <div className="card panel">
          <div className="panel-head">
            <h2>What&apos;s coming up</h2>
            <span className="p-meta">Next 30 days</span>
            <div className="tl-legend">
              <span>
                <i className="dot danger" />
                Critical
              </span>
              <span>
                <i className="dot warn" />
                Approaching
              </span>
              <span>
                <i className="dot neutral" />
                Routine
              </span>
            </div>
          </div>
          <ul className="tl-m">
            {timeline.map((event) => (
              <li key={event.id}>
                <span className="dd">{event.dateLabel}</span>
                <span className={`dot ${event.severity}`} />
                <span className="tl-title">{event.title}</span>
                <Pill tone={event.severity}>{event.daysLabel}</Pill>
              </li>
            ))}
          </ul>
        </div>

        <div className="card panel">
          <div className="panel-head">
            <h2>Compliance areas</h2>
            <button type="button" className="p-link" onClick={() => onNavigate('compliance')}>
              View all
            </button>
          </div>
          <div className="area-list">
            {areas.map((area) => (
              <AreaRow key={area.id} area={area} onNavigate={onNavigate} />
            ))}
          </div>
        </div>
      </div>

      <p className="footer-note">
        Last sync 14 minutes ago · Connected: ZATCA · Qiwa · GOSI · Baladiya · Prototype V2
      </p>
    </>
  )
}
