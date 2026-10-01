import type { DeadlineItem, ScreenId } from '../types/product'
import { Pill } from '../components/ui'

export function DeadlinesPage({
  deadlines,
  onNavigate,
  onToast,
}: {
  deadlines: DeadlineItem[]
  onNavigate: (screen: ScreenId) => void
  onToast: (message: string) => void
}) {
  const week = deadlines.filter((item) => item.group === 'week')
  const month = deadlines.filter((item) => item.group === 'month')

  function renderRow(item: DeadlineItem) {
    return (
      <div key={item.id} className="dead-row">
        <div className="dead-date">
          <div className="d-day">{item.day}</div>
          <div className="d-mon">{item.mon}</div>
        </div>
        <div>
          <div className="dead-title">{item.title}</div>
          <div className="dead-meta">
            <span className="tag">{item.area}</span>
            <span className="tag">Owner · {item.owner}</span>
            {item.period ? <span className="tag">{item.period}</span> : null}
          </div>
        </div>
        <Pill tone={item.severity}>{item.daysLabel}</Pill>
        <div className="dead-actions">
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => {
              if (item.goto === 'stub') onToast(`${item.actionLabel} opened in the full product`)
              else onNavigate(item.goto)
            }}
          >
            {item.actionLabel}
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="page-head">
        <h1>Deadlines</h1>
        <p className="sub">
          Every obligation Tripwire is tracking for the next 30 days, with owners already assigned.
        </p>
      </div>
      <div className="card panel panel-flush">
        <div className="group-label-row">Next 7 days</div>
        {week.map(renderRow)}
        <div className="group-label-row">8–30 days</div>
        {month.map(renderRow)}
      </div>
      <p className="footer-note">
        Tripwire adjusts reminder timing by obligation type — filings remind earlier than reviews.
      </p>
    </>
  )
}
