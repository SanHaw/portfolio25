
type Props = {
  background: string
}

export default function ProjectBackground({ background }: Props) {
  // Split by double newlines to preserve paragraph breaks
  const paragraphs = background.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean)
  
  return (
    <>
      <h3 className="text-3xl mt-8">Background</h3>
      <div className="mt-2 text-lg text-gray-700">
        {paragraphs.map((paragraph, idx) => (
          <p key={idx} className={idx > 0 ? 'mt-4' : ''}>
            {paragraph}
          </p>
        ))}
      </div>
    </>
  )
}
