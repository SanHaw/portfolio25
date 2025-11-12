
type TableRow = {
  problem: string
  solution: string
}

type Props = {
  rows: TableRow[]
}

export default function ProjectProblemSolution({ rows }: Props) {
  return (
    <>
      <h3 className="text-3xl mt-8">Problem and Solution Statements</h3>
      <p className="mt-2 text-lg text-gray-700">
        Here's a clear <strong>Problem–Solution Table</strong> based on the investigation:
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-lg">
                Problem
              </th>
              <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-lg">
                Proposed Solution
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx}>
                <td className="border border-gray-300 px-4 py-3 text-base align-top">
                  {row.problem}
                </td>
                <td className="border border-gray-300 px-4 py-3 text-base align-top">
                  {row.solution}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
