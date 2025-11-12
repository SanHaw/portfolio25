import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type Props = {
  description: string
}

export default function ProjectDescription({ description }: Props) {
  return (
    <div className="mt-4 text-lg text-gray-700 prose prose-lg max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{description}</ReactMarkdown>
    </div>
  )
}
