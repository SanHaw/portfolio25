interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function Button({ 
  children, 
  onClick, 
  disabled = false, 
  variant = 'primary',
  size = 'md',
  className = '' 
}: ButtonProps) {
  const baseStyles = 'rounded-full font-medium transition-colors text-base'
  
  const sizeStyles = {
    sm: 'px-4 py-2',
    md: 'px-6 py-3',
    lg: 'px-8 py-4'
  }
  
  const variantStyles = {
    primary: 'bg-yellow-400 text-gray-900 hover:bg-yellow-500',
    secondary: 'bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-yellow-200 hover:border-gray-900 px-3 py-1 text-sm',
    outline: 'bg-transparent border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white'
  }
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
