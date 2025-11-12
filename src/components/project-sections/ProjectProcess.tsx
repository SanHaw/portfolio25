import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type Props = {
  process: string
}

export default function ProjectProcess({ process }: Props) {
  return (
    <>
      <h3 className="text-3xl mt-8">Process</h3>
      <div className="mt-2 text-lg text-gray-700 prose prose-lg max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{process}</ReactMarkdown>
      </div>
    </>
  )
}
