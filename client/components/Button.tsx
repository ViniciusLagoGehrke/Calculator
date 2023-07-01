import { ReactNode } from 'react'

type ButtonProps = {
  title: string
  onClick: () => void
  className?: string
}

export default function Button({ title, onClick, className="" }: ButtonProps ) {
  return (
    <button
      className={`border h-10 rounded-md hover:border-green-400 hover:text-green-400 ${className}`}
      onClick={onClick} 
    >
      { title }
    </button>
  )
}
