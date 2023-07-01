import { ReactNode } from 'react'

type RowProps = {
  children: ReactNode,
  className?: string
}
export default function Row({ children, className="" }: RowProps ) {
  return (
    <div className={`grid grid-cols-4 justify-center gap-2 py-1 w-44 ${className}`}>
      { children }
    </div>
  )
}
