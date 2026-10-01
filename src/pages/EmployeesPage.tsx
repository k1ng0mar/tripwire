import type { EmployeeRow } from '../types/product'
import { Ic, Pill } from '../components/ui'
import { EmployeePanel } from '../components/EmployeePanel'
import type { ScreenId } from '../types/product'

const FILTERS = [
  ['all', 'All', 10],
  ['danger', 'Action required', 2],
  ['warn', 'Review soon', 2],
  ['good', 'Healthy', 6],
] as const

export function EmployeesPage({
  employees,
  selectedId,
  onSelect,
  filter,
  onFilter,
  onNavigate,
}: {
  employees: EmployeeRow[]
  selectedId: string | null
  onSelect: (id: string | null) => void
  filter: 'all' | 'danger' | 'warn' | 'good'
  onFilter: (filter: 'all' | 'danger' | 'warn' | 'good') => void
  onNavigate: (screen: ScreenId) => void
}) {
  const rows = filter === 'all' ? employees : employees.filter((row) => row.risk === filter)
  const selected = employees.find((row) => row.id === selectedId) ?? null

  return (
    <>
      <div className="page-head">
        <h1>Employee compliance</h1>
        <p className="sub">
          Contracts, documents and identifiers — the employees with open compliance activity. Click
          a row for full detail.
        </p>
      </div>

      <div className="stat-row">
        <div className="stat">
          <div className="micro-label">Employees</div>
          <div className="v">32</div>
          <div className="s">+2 this quarter</div>
        </div>
        <div className="stat">
          <div className="micro-label">Saudi employees</div>
          <div className="v">18</div>
          <div className="s">56% of workforce</div>
        </div>
        <div className="stat">
          <div className="micro-label">Expat employees</div>
          <div className="v">14</div>
          <div className="s">Across 7 nationalities</div>
        </div>
        <div className="stat">
          <div className="micro-label">Documents expiring soon</div>
          <div className="v">3</div>
          <div className="s">Next: Iqama · Oct 12</div>
        </div>
      </div>

      <div className="card nitaq-strip">
        <div>
          <div className="nitaq-title">Nitaqat composition</div>
          <div className="nitaq-sub">Saudi 18 · Expat 14 · updated from GOSI tonight</div>
        </div>
        <div className="nitaq-bar">
          <div className="gauge compact">
            <div className="gauge-fill warn" style={{ width: '56%' }} />
            <span className="gauge-tick strong" style={{ left: '60%' }} />
          </div>
          <div className="gauge-scale labels">
            <span className="s1">Current</span>
            <span className="s3">Band requirement</span>
          </div>
        </div>
        <Pill tone="warn">Below band requirement</Pill>
        <button type="button" className="btn btn-quiet" onClick={() => onNavigate('issue')}>
          Review issue <Ic id="arrow-r" />
        </button>
      </div>

      <div className="chip-row">
        {FILTERS.map(([key, label, count]) => (
          <button
            key={key}
            type="button"
            className={`chip${filter === key ? ' is-on' : ''}`}
            onClick={() => onFilter(key)}
          >
            {label}
            <span className="cnt">{count}</span>
          </button>
        ))}
      </div>

      <div className="card table-card">
        <div className="table-wrap">
          <table className="tbl">
            <thead>
              <tr>
                <th>Employee</th>
                <th>Role</th>
                <th>Nationality</th>
                <th>Contract status</th>
                <th>Required documents</th>
                <th>Expiry</th>
                <th>Risk</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((employee) => (
                <tr key={employee.id} className="is-click" onClick={() => onSelect(employee.id)}>
                  <td>
                    <span className="e-cell">
                      <span className="avatar sq">{employee.initials}</span>
                      <span>
                        {employee.name}
                        <span className="e-sub">{employee.employeeNo}</span>
                      </span>
                    </span>
                  </td>
                  <td>{employee.role}</td>
                  <td className="mut">{employee.nationality}</td>
                  <td>
                    <Pill tone={employee.contractTone === 'plain' ? 'good' : employee.contractTone}>
                      {employee.contract}
                    </Pill>
                  </td>
                  <td className="faint">{employee.documents}</td>
                  <td className="tnum">{employee.expiry}</td>
                  <td>
                    <Pill tone={employee.risk}>{employee.riskLabel}</Pill>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selected && (
        <EmployeePanel
          employee={selected}
          onClose={() => onSelect(null)}
          onRelated={() => {
            onSelect(null)
            onNavigate('issue')
          }}
        />
      )}
    </>
  )
}
