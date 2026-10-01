import type { EmployeeRow } from '../types/product'
import { Ic } from './ui'

export function EmployeePanel({
  employee,
  onClose,
  onRelated,
}: {
  employee: EmployeeRow
  onClose: () => void
  onRelated: () => void
}) {
  return (
    <>
      <div className="scrim" onClick={onClose} />
      <aside className="sidepanel open" aria-label="Employee detail">
        <div className="sp-head">
          <span className="avatar">{employee.initials}</span>
          <div>
            <div className="n">{employee.name}</div>
            <div className="r">{employee.role}</div>
          </div>
          <button type="button" className="icon-btn" aria-label="Close panel" onClick={onClose}>
            <Ic id="x" />
          </button>
        </div>
        <div className="card panel detail-rows">
          <div className="row">
            <span className="k">Employee</span>
            <span className="v">{employee.employeeNo}</span>
          </div>
          <div className="row">
            <span className="k">Nationality</span>
            <span className="v">{employee.nationality}</span>
          </div>
          <div className="row">
            <span className="k">Contract</span>
            <span className="v">{employee.contract}</span>
          </div>
          <div className="row">
            <span className="k">Documents</span>
            <span className="v">{employee.documents}</span>
          </div>
          <div className="row">
            <span className="k">Expiry</span>
            <span className="v tnum">{employee.expiry}</span>
          </div>
          <div className="row">
            <span className="k">Risk</span>
            <span className="v">{employee.riskLabel}</span>
          </div>
        </div>
        <p className="prose">{employee.detail}</p>
        <div className="detail-actions">
          <button type="button" className="btn btn-primary" onClick={onClose}>
            Close
          </button>
          <button type="button" className="btn btn-ghost" onClick={onRelated}>
            Related issue
          </button>
        </div>
      </aside>
    </>
  )
}
