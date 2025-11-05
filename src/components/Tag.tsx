interface TagProps {
  children: React.ReactNode
  className?: string
}

export default function Tag({ children, className = '' }: TagProps) {
  return (
    <span className={`text-sm px-5 py-2 bg-gray-200 text-gray-700 rounded-full ${className}`}>
      {children}
    </span>
  )
}
