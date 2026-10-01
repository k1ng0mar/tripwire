import type { AreaItem, ScreenId } from '../types/product'
import { Ic, Pill } from './ui'

export function AreaRow({
  area,
  onNavigate,
}: {
  area: AreaItem
  onNavigate: (screen: ScreenId) => void
}) {
  return (
    <button type="button" className="area-row" onClick={() => onNavigate(area.goto)}>
      <span className={`area-ic ${area.status}`}>
        <Ic id={area.icon} />
      </span>
      <span>
        <span className="area-name">{area.name}</span>
        <span className="area-meta">{area.meta}</span>
      </span>
      <Pill tone={area.status}>{area.statusLabel}</Pill>
      <Ic id="chev-r" className="chev" />
    </button>
  )
}
