import type { ScreenId } from '../types/product'
import { Ic, Pill, SevChip } from '../components/ui'

export interface AffectedEmployee {
  initials: string
  name: string
  why: string
  tone: 'danger' | 'warn'
  label: string
}

export function IssuePage({
  tasks,
  done,
  suggestion,
  assignee,
  assignOptions,
  affected,
  onToggleTask,
  onAssign,
  onAssignChange,
  onResolve,
  onNavigate,
  onToast,
}: {
  tasks: string[]
  done: Record<number, boolean>
  suggestion: string
  assignee: string
  assignOptions: string[]
  affected: AffectedEmployee[]
  onToggleTask: (index: number) => void
  onAssign: () => void
  onAssignChange: (value: string) => void
  onResolve: () => void
  onNavigate: (screen: ScreenId) => void
  onToast: (message: string) => void
}) {
  const doneCount = tasks.filter((_, index) => done[index]).length

  return (
    <>
      <nav className="crumb" aria-label="Breadcrumb">
        <button type="button" onClick={() => onNavigate('overview')}>
          Overview
        </button>
        <span className="sep">/</span>
        <span>Needs attention</span>
        <span className="sep">/</span>
        <span className="current">Nitaqat quota at risk</span>
      </nav>

      <div className="card issue-head-card">
        <SevChip tone="danger" icon="alert" />
        <div className="issue-head-copy">
          <h1>Nitaqat quota at risk</h1>
          <div className="meta">
            <Pill tone="danger">High risk</Pill>
            <Pill tone="neutral">
              <Ic id="clock" className="ic-xs" />
              <span className="tnum">23 days remaining</span>
            </Pill>
            <span className="p-meta">Opened Sep 8 · auto-detected from Qiwa data</span>
          </div>
        </div>
        <button type="button" className="btn btn-primary" onClick={onResolve}>
          <Ic id="check" /> Mark as resolved
        </button>
      </div>

      <div className="two-col">
        <div className="stack-16">
          <div className="card panel">
            <div className="panel-head">
              <h2>What&apos;s happening</h2>
            </div>
            <p className="prose">
              Your current employee composition may cause your company to fall below the required
              Saudization threshold when the next quarterly assessment runs on{' '}
              <strong>October 4</strong>.
            </p>
          </div>

          <div className="card panel">
            <div className="panel-head">
              <h2>Why this matters</h2>
            </div>
            <p className="prose">
              Falling into a restricted compliance status may affect permits, visa issuance and
              employee-related government processes until the ratio is restored.
            </p>
          </div>

          <div className="card panel">
            <div className="panel-head">
              <h2>What you should do</h2>
              <span className="task-progress tnum">
                {doneCount} of {tasks.length} done
              </span>
            </div>
            <ul className="check-list">
              {tasks.map((task, index) => (
                <li key={task}>
                  <label>
                    <input
                      type="checkbox"
                      checked={!!done[index]}
                      onChange={() => onToggleTask(index)}
                    />
                    <span>{task}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="stack-16">
          <div className="card panel detail-rows">
            <div className="micro-label">Details</div>
            <div className="row">
              <span className="k">Area</span>
              <span className="v">Nitaqat status</span>
            </div>
            <div className="row">
              <span className="k">Affected employees</span>
              <span className="v tnum">6</span>
            </div>
            <div className="row">
              <span className="k">Data source</span>
              <span className="v">Qiwa · GOSI</span>
            </div>
            <div className="row">
              <span className="k">Review due</span>
              <span className="v">October 4, 2026</span>
            </div>
            <div className="row">
              <span className="k">Assigned to</span>
              <span className="v">{assignee || 'Unassigned'}</span>
            </div>
          </div>

          <div className="card panel">
            <div className="micro-label">Assign to someone</div>
            <label className="field">
              <span className="f-label">Team member</span>
              <select value={assignee} onChange={(event) => onAssignChange(event.target.value)}>
                <option value="">Choose a person…</option>
                {assignOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
            <button type="button" className="btn btn-ghost btn-block" onClick={onAssign}>
              Assign issue
            </button>
          </div>

          <div className="card panel">
            <div className="panel-head">
              <h2 className="h-sm">Affected employees</h2>
              <button type="button" className="p-link" onClick={() => onNavigate('employees')}>
                Open employee compliance
              </button>
            </div>
            {affected.map((employee) => (
              <div key={employee.initials} className="mini-emp">
                <span className="avatar sq">{employee.initials}</span>
                <span>
                  <span className="who">{employee.name}</span>
                  <span className="why">{employee.why}</span>
                </span>
                <Pill tone={employee.tone}>{employee.label}</Pill>
              </div>
            ))}
          </div>

          <div className="reco">
            <div className="t">Tripwire suggests</div>
            {suggestion}
          </div>

          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => onToast('Draft action pack created for Nitaqat issue')}
          >
            Create action pack
          </button>
        </div>
      </div>
    </>
  )
}
