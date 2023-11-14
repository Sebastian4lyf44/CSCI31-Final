import { UserCircleIcon } from '@heroicons/react/24/solid'

const menuItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
  {
    title: 'Services',
    href: '/services',
  },
  {
    title: 'Products',
    href: '/products',
  },
]

export default function Navbar() {
  return (
    <div className="flex justify-between gap-6 m-12 items-center">
      <UserCircleIcon className="h-12 w-12 text-blue-500" />
      <div className="flex gap-4">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="px-4 py-2 bg-orange-600 text-sky-900 shadow-md rounded-md text-lg transition-all hover:bg-sky-950 active:bg-sky-500 "
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  )
}
