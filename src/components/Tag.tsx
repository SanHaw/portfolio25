interface TagProps {
  children: React.ReactNode
  className?: string
}

export default function Tag({ children, className = '' }: TagProps) {
  return (
    <span className={`text-xs md:text-sm px-2 md:px-5 py-1 md:py-2 bg-gray-200 text-gray-700 rounded-full ${className}`}>
      {children}
    </span>
  )
}
