import type { AreaItem, ScreenId } from '../types/product'
import { AreaRow } from '../components/AreaRow'

export function CompliancePage({
  areas,
  onNavigate,
}: {
  areas: AreaItem[]
  onNavigate: (screen: ScreenId) => void
}) {
  const counts = {
    all: areas.length,
    danger: areas.filter((area) => area.status === 'danger').length,
    warn: areas.filter((area) => area.status === 'warn').length,
    good: areas.filter((area) => area.status === 'good').length,
  }

  return (
    <>
      <div className="page-head">
        <h1>Compliance overview</h1>
        <p className="sub">
          Seven areas are tracked. Statuses roll up into your health score every night.
        </p>
      </div>

      <div className="chip-row">
        <span className="chip is-on">
          All<span className="cnt">{counts.all}</span>
        </span>
        <span className="chip">
          Action required<span className="cnt">{counts.danger}</span>
        </span>
        <span className="chip">
          Needs attention<span className="cnt">{counts.warn}</span>
        </span>
        <span className="chip">
          Healthy<span className="cnt">{counts.good}</span>
        </span>
      </div>

      <div className="two-col">
        <div className="card panel panel-flush">
          <div className="area-list">
            {areas.map((area) => (
              <AreaRow key={area.id} area={area} onNavigate={onNavigate} />
            ))}
          </div>
        </div>

        <div className="stack-16">
          <div className="card panel side-card">
            <div className="micro-label">This month</div>
            <div className="row">
              <span className="k">Obligations tracked</span>
              <span className="v tnum">5</span>
            </div>
            <div className="row">
              <span className="k">Already closed</span>
              <span className="v tnum">2</span>
            </div>
            <div className="row">
              <span className="k">Next deadline</span>
              <span className="v">Insurance review · Sep 14</span>
            </div>
            <div className="row">
              <span className="k">Busiest area</span>
              <span className="v">Employee compliance</span>
            </div>
          </div>

          <div className="card panel side-card">
            <div className="micro-label">Connected sources</div>
            <div className="src-line">
              <span className="sdot" />
              ZATCA — filings &amp; e-invoicing
            </div>
            <div className="src-line">
              <span className="sdot" />
              Qiwa — contracts &amp; Nitaqat
            </div>
            <div className="src-line">
              <span className="sdot" />
              GOSI — registrations &amp; wages
            </div>
            <div className="src-line">
              <span className="sdot" />
              Baladiya — licenses &amp; permits
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
