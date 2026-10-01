import type { DocumentRow } from '../types/product'
import { Ic, Pill } from '../components/ui'

const CATEGORIES = [
  ['all', 'All'],
  ['employee', 'Employee documents'],
  ['license', 'Licenses'],
  ['permit', 'Permits'],
  ['insurance', 'Insurance'],
  ['tax', 'Tax documents'],
  ['company', 'Company registration'],
] as const

export function DocumentsPage({
  documents,
  filter,
  onFilter,
  onToast,
}: {
  documents: DocumentRow[]
  filter: string
  onFilter: (filter: string) => void
  onToast: (message: string) => void
}) {
  const rows = filter === 'all' ? documents : documents.filter((row) => row.catKey === filter)
  const uploadHint = 'Upload flow is interactive in the prototype — files are demo-only'

  return (
    <>
      <div className="page-head">
        <h1>Documents</h1>
        <p className="sub">
          One calm place for everything that expires. Tripwire reads dates from uploads and flags
          what needs renewal.
        </p>
      </div>

      <div
        className="dropzone"
        role="button"
        tabIndex={0}
        onClick={() => onToast(uploadHint)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') onToast(uploadHint)
        }}
      >
        <span className="dz-ic">
          <Ic id="upload" />
        </span>
        <div className="dz-t">
          Drag &amp; drop documents here, or <u>browse files</u>
        </div>
        <div className="dz-s">PDF, JPG or PNG up to 25 MB · expiry dates are read automatically</div>
      </div>

      <div className="chip-row">
        {CATEGORIES.map(([key, label]) => (
          <button
            key={key}
            type="button"
            className={`chip${filter === key ? ' is-on' : ''}`}
            onClick={() => onFilter(key)}
          >
            {label}
            <span className="cnt">
              {key === 'all' ? documents.length : documents.filter((row) => row.catKey === key).length}
            </span>
          </button>
        ))}
      </div>

      <div className="card table-card">
        <div className="table-wrap">
          <table className="tbl">
            <thead>
              <tr>
                <th>Document</th>
                <th>Category</th>
                <th>Owner</th>
                <th>Expiry date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((doc) => (
                <tr key={doc.id}>
                  <td className="strong">{doc.name}</td>
                  <td className="mut">{doc.category}</td>
                  <td className="mut">{doc.owner}</td>
                  <td className="tnum">{doc.expiry}</td>
                  <td>
                    <Pill tone={doc.severity}>{doc.status}</Pill>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
