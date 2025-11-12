
type Props = {
  figmaUrl: string
}

export default function ProjectFigmaEmbed({ figmaUrl }: Props) {
  return (
    <div className="mt-6">
      <iframe 
        title="figma" 
        src={figmaUrl} 
        className="w-full border" 
        style={{ height: '80vh' }} 
      />
    </div>
  )
}
