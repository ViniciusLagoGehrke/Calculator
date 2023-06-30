import { ReactNode } from 'react'

type RowProps = {
  children: ReactNode
}
export default function Row({ children }: RowProps ) {
  return (
    <div className="flex justify-center gap-2 py-1">
      { children }
    </div>
  )
}
