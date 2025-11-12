
type UxInsight = {
  title: string
  description: string
}

type CoreFeature = {
  title: string
  description: string
}

type Props = {
  insights: UxInsight[]
  solutionIntro: string
  coreFeatures: CoreFeature[]
  closingText: string
}

export default function ProjectDesignSolution({ insights, solutionIntro, coreFeatures, closingText }: Props) {
  return (
    <>
      <h3 className="text-3xl mt-8">UX Insights</h3>
      <p className="mt-2 text-lg text-gray-700">
        From these findings, we saw three key opportunities:
      </p>
      <ol className="mt-4 text-lg text-gray-700 space-y-3 list-decimal list-inside">
        {insights.map((insight, idx) => (
          <li key={idx}>
            <strong>{insight.title}</strong> — {insight.description}
          </li>
        ))}
      </ol>

      <h3 className="text-3xl mt-8">Design Solution</h3>
      <p className="mt-2 text-lg text-gray-700">{solutionIntro}</p>

      <p className="mt-4 text-lg text-gray-700 font-semibold">Core Features:</p>
      <ul className="mt-2 text-lg text-gray-700 space-y-2 list-disc list-inside">
        {coreFeatures.map((feature, idx) => (
          <li key={idx}>
            <strong>{feature.title}</strong> — {feature.description}
          </li>
        ))}
      </ul>

      <p className="mt-4 text-lg text-gray-700">{closingText}</p>
    </>
  )
}
