import type { ScreenId } from '../types/product'
import { Ic } from '../components/ui'

export function StubPage({
  title,
  onNavigate,
}: {
  title: string
  onNavigate: (screen: ScreenId) => void
}) {
  return (
    <div className="empty is-on stub-empty">
      <div className="e-ic">
        <Ic id="reg" />
      </div>
      <h3>{title}</h3>
      <p>
        This area exists in the full product map, but the prototype focuses on the compliance core:
        Overview, Compliance, Issue detail, Employees, Deadlines, Documents and Regulations.
      </p>
      <button type="button" className="btn btn-primary" onClick={() => onNavigate('overview')}>
        Back to Overview
      </button>
    </div>
  )
}
