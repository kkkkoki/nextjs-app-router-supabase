import type { Database } from '@/database.types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import SupabaseListener from '../_components/supabase-listener'
import TodoItem from './todo-item'

export default async function TodoList() {
  const supabase = createServerComponentClient<Database>({
    cookies,
  })
  const { data: todos } = await supabase
    .from('todos')
    .select()
    .order('created_at', { ascending: true })
  return (
    <ul className="my-6 mx-3">
      {todos?.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  )
}
