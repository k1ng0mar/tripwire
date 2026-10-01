export type ScreenId =
  | 'overview'
  | 'compliance'
  | 'issue'
  | 'employees'
  | 'deadlines'
  | 'documents'
  | 'regulations'
  | 'stub'

export type Status = 'good' | 'warn' | 'danger' | 'neutral'

export interface Company {
  name: string
  cr: string
  city: string
  meta: string
}

export interface Health {
  score: number
  delta: string
  note: string
  dateLabel: string
  statusLine: string
  statusStrong: string
  statusTail: string
}

export interface AlertItem {
  id: string
  kind: string
  title: string
  body: string
  severity: Status
  daysLabel: string
  actionLabel: string
  goto: ScreenId
}

export interface TimelineEvent {
  id: string
  title: string
  dateLabel: string
  daysLabel: string
  severity: Status
  left: number
  above: boolean
  end?: boolean
}

export interface AreaItem {
  id: string
  name: string
  meta: string
  status: Status
  statusLabel: string
  icon: string
  goto: ScreenId
}

export interface EmployeeRow {
  id: string
  initials: string
  name: string
  employeeNo: string
  role: string
  nationality: string
  contract: string
  contractTone: Status | 'plain'
  documents: string
  expiry: string
  risk: Status
  riskLabel: string
  detail: string
}

export interface DeadlineItem {
  id: string
  day: string
  mon: string
  title: string
  area: string
  owner: string
  period?: string
  daysLabel: string
  severity: Status
  actionLabel: string
  goto: ScreenId
  group: 'week' | 'month'
}

export interface DocumentRow {
  id: string
  name: string
  category: string
  owner: string
  expiry: string
  status: string
  severity: Status
  catKey: string
}

export interface RegulationItem {
  id: string
  kind: string
  title: string
  summary: string
  severity: Status
  facts: { label: string; value: string }[]
  detail?: {
    changed: string
    affects: string
    actions: string[]
    source: string
  }
}
