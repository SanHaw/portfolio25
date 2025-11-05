
export default function IconCircle({ children, size = 'md', className = '', ...props }: any) {
  const sizeClass = size === 'lg' ? 'icon-circle icon-circle--large' : 'icon-circle'
  return (
    <span className={`${sizeClass} ${className}`} {...props}>
      {children}
    </span>
  )
}
