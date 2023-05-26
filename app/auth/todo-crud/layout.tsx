import { Suspense } from 'react'
import Spinner from '@/app/_components/spinner'
import React from 'react'
import TodoList from '@/app/_components/todo-list'
import TodoEdit from '@/app/_components/todo-edit'

export default function TodoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex">
      <aside className="h-[calc(100vh-56px)] w-1/4 bg-gray-200">
        <TodoEdit />
        <Suspense fallback={<Spinner color="border-green-500" />}>
          {/* @ts-ignore */}
          <TodoList />
        </Suspense>
      </aside>
      <main className="flex flex-1 justify-center h-full">{children}</main>
    </section>
  )
}
