import { ReactNode } from 'react'

type RowProps = {
  children: ReactNode
}
export default function Row({ children }: RowProps ) {
  return (
    <div className="grid grid-cols-4 justify-center gap-2 py-1 w-44">
      { children }
    </div>
  )
}
