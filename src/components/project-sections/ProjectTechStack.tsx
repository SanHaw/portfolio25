
type Props = {
  tech: string
}

export default function ProjectTechStack({ tech }: Props) {
  return (
    <>
      <h3 className="text-3xl mt-6">Tech stack</h3>
      <p className="mt-2 text-lg text-gray-700">{tech}</p>
    </>
  )
}
