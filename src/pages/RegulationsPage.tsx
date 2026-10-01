import type { RegulationItem } from '../types/product'
import { Ic, Pill, SevChip } from '../components/ui'
import { severityIcon } from '../lib/labels'

export function RegulationsPage({
  regulations,
  openId,
  onToggle,
  onToast,
}: {
  regulations: RegulationItem[]
  openId: string | null
  onToggle: (id: string) => void
  onToast: (message: string) => void
}) {
  return (
    <>
      <div className="page-head">
        <h1>Regulations</h1>
        <p className="sub">
          Changes we&apos;re watching for you — translated into what they mean for your company, not
          a news feed.
        </p>
      </div>

      <div className="chip-row">
        <Pill tone="brand">3 monitored changes</Pill>
        <Pill tone="warn">1 may affect you</Pill>
        <span className="p-meta quiet">Updated this morning</span>
      </div>

      {regulations.map((reg) => {
        const open = openId === reg.id
        return (
          <article key={reg.id} className="card reg-card">
            <div className="reg-top">
              <SevChip tone={reg.severity} icon={severityIcon(reg.kind, reg.severity)} />
              <div className="reg-copy">
                <div className="alert-kind">{reg.kind}</div>
                <h2>{reg.title}</h2>
                <p className="reg-sub">{reg.summary}</p>
                <div className="reg-facts">
                  {reg.facts.map((fact) => (
                    <span key={fact.label} className="f">
                      {fact.label}
                      <b>{fact.value}</b>
                    </span>
                  ))}
                </div>
              </div>
              {reg.detail && (
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => onToggle(reg.id)}
                  aria-expanded={open}
                >
                  {open ? 'Hide impact' : reg.severity === 'warn' ? 'See impact' : 'Details'}{' '}
                  <Ic id="chev-d" />
                </button>
              )}
            </div>

            {reg.detail && open && (
              <div className="reg-detail open">
                <div className={`rd-grid${reg.detail.actions.length ? '' : ' rd-2col'}`}>
                  <div className="rd">
                    <h3>What changed</h3>
                    <p>{reg.detail.changed}</p>
                  </div>
                  <div className="rd">
                    <h3>Does it affect you?</h3>
                    <p>{reg.detail.affects}</p>
                  </div>
                  {reg.detail.actions.length > 0 && (
                    <div className="rd">
                      <h3>What you need to do</h3>
                      <ol>
                        {reg.detail.actions.map((action) => (
                          <li key={action}>{action}</li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
                <div className="reg-actions">
                  {reg.detail.actions.length > 0 && (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => onToast('Task created — assigned to Noura Al-Qahtani')}
                    >
                      Create task
                    </button>
                  )}
                  <button
                    type="button"
                    className="btn btn-ghost"
                    onClick={() =>
                      onToast('Marked as not applicable — we’ll still watch the final text')
                    }
                  >
                    Not applicable
                  </button>
                  <span className="p-meta quiet">{reg.detail.source}</span>
                </div>
              </div>
            )}
          </article>
        )
      })}
    </>
  )
}
