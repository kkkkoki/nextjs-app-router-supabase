import '../styles/globals.css'
import NavBar from './_components/nav-bar'

export const metadata = {
  title: 'Next.js App Directory with Supabase',
  description: 'Next.jsのApp directoryとSupabaseを使ってみる',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
