import Link from 'next/link'

export default function NavBar() {
  const links = [
    {
      label: 'Home',
      segment: '/',
    },
    {
      label: 'Nested Layout with Blogs',
      segment: '/blogs',
    },
    {
      label: 'Streaming, SR',
      segment: '/streaming-sr',
    },
    {
      label: 'Auth with CRUD',
      segment: '/auth',
    },
  ]
  return (
    <header className="bg-gray-800 p-4">
      <nav className="space-x-4">
        {links.map((link) => (
          <Link
            className="rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-500"
            href={link.segment}
            key={link.segment}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
