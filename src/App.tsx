import { useCallback, useState } from 'react'
import {
  affectedEmployees,
  alerts,
  areas,
  assignOptions,
  companies,
  company as defaultCompany,
  deadlines,
  documents,
  employees,
  health,
  issueSuggestion,
  issueTasks,
  regulations,
  timeline,
} from './data/product'
import type { Company, ScreenId } from './types/product'
import { IconSprite } from './components/ui'
import { Shell } from './components/Shell'
import { OverviewPage } from './pages/OverviewPage'
import { CompliancePage } from './pages/CompliancePage'
import { IssuePage } from './pages/IssuePage'
import { EmployeesPage } from './pages/EmployeesPage'
import { DeadlinesPage } from './pages/DeadlinesPage'
import { DocumentsPage } from './pages/DocumentsPage'
import { RegulationsPage } from './pages/RegulationsPage'
import { StubPage } from './pages/StubPage'

export default function App() {
  const [screen, setScreen] = useState<ScreenId>('overview')
  const [stubTitle, setStubTitle] = useState('Not in this prototype')
  const [company, setCompany] = useState<Company>(defaultCompany)
  const [companyMenuOpen, setCompanyMenuOpen] = useState(false)
  const [bellOpen, setBellOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [toast, setToast] = useState<string | null>(null)
  const [taskDone, setTaskDone] = useState<Record<number, boolean>>({})
  const [assignee, setAssignee] = useState('')
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<string | null>(null)
  const [empFilter, setEmpFilter] = useState<'all' | 'danger' | 'warn' | 'good'>('all')
  const [docFilter, setDocFilter] = useState('all')
  const [openRegId, setOpenRegId] = useState<string | null>('wps')

  const showToast = useCallback((message: string) => {
    setToast(message)
    window.setTimeout(() => setToast(null), 2800)
  }, [])

  const navigate = useCallback((next: ScreenId, title?: string) => {
    setCompanyMenuOpen(false)
    setBellOpen(false)
    if (next === 'stub') setStubTitle(title ?? 'Not in this prototype')
    setScreen(next)
  }, [])

  return (
    <>
      <IconSprite />
      <Shell
        screen={screen}
        stubTitle={stubTitle}
        company={company}
        companies={companies}
        companyMenuOpen={companyMenuOpen}
        bellOpen={bellOpen}
        searchQuery={searchQuery}
        toast={toast}
        onNavigate={navigate}
        onCompanyMenu={setCompanyMenuOpen}
        onSelectCompany={(next) => {
          setCompany(next)
          setCompanyMenuOpen(false)
          showToast(`Switched to ${next.name}`)
        }}
        onBell={setBellOpen}
        onSearch={setSearchQuery}
      >
        {screen === 'overview' && (
          <OverviewPage
            company={company}
            health={health}
            alerts={alerts}
            timeline={timeline}
            areas={areas}
            onNavigate={navigate}
          />
        )}
        {screen === 'compliance' && <CompliancePage areas={areas} onNavigate={navigate} />}
        {screen === 'issue' && (
          <IssuePage
            tasks={issueTasks}
            done={taskDone}
            suggestion={issueSuggestion}
            assignee={assignee}
            assignOptions={assignOptions}
            affected={affectedEmployees}
            onToggleTask={(index) =>
              setTaskDone((prev) => ({ ...prev, [index]: !prev[index] }))
            }
            onAssign={() =>
              showToast(assignee ? `Assigned to ${assignee}` : 'Choose a team member first')
            }
            onAssignChange={setAssignee}
            onResolve={() => showToast('Marked as resolved — health score will recompute tonight')}
            onNavigate={navigate}
            onToast={showToast}
          />
        )}
        {screen === 'employees' && (
          <EmployeesPage
            employees={employees}
            selectedId={selectedEmployeeId}
            onSelect={setSelectedEmployeeId}
            filter={empFilter}
            onFilter={setEmpFilter}
            onNavigate={navigate}
          />
        )}
        {screen === 'deadlines' && (
          <DeadlinesPage deadlines={deadlines} onNavigate={navigate} onToast={showToast} />
        )}
        {screen === 'documents' && (
          <DocumentsPage
            documents={documents}
            filter={docFilter}
            onFilter={setDocFilter}
            onToast={showToast}
          />
        )}
        {screen === 'regulations' && (
          <RegulationsPage
            regulations={regulations}
            openId={openRegId}
            onToggle={(id) => setOpenRegId((prev) => (prev === id ? null : id))}
            onToast={showToast}
          />
        )}
        {screen === 'stub' && <StubPage title={stubTitle} onNavigate={navigate} />}
      </Shell>
    </>
  )
}
