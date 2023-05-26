import NotesList from './_components/notes-list'
import TimerCounter from './_components/timer-counter'
import { Suspense } from 'react'
import Spinner from './_components/spinner'
import RefreshBtn from './_components/refresh-btn'
export default function Page() {
  return (
    <main>
      <div className="m-10 text-center">
        <p>Hello World🚀</p>
        <Suspense fallback={<Spinner color="border-green-500" />}>
          {/* @ts-ignore */}
          <NotesList />
        </Suspense>
        <TimerCounter />
        <RefreshBtn />
      </div>
    </main>
  )
}
