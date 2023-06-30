import { ReactNode } from 'react'

type ButtonProps = {
  title: string
  onClick: () => void
}

export default function Button({ title, onClick }: ButtonProps ) {
  return (
    <button
      className="border w-10 h-10 rounded-md hover:border-green-400 hover:text-green-400"
      onClick={onClick} 
    >
      { title }
    </button>
  )
}
