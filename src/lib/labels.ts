import type { Status } from '../types/product'

export function severityIcon(
  kind: string,
  severity: Status,
): 'alert' | 'clock' | 'doc' | 'check' {
  if (severity === 'danger') return 'alert'
  if (severity === 'good') return 'check'
  if (severity === 'neutral') return 'clock'
  return kind.toLowerCase().includes('deadline') ? 'clock' : 'doc'
}
