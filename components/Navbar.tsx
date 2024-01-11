import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="grid items-center justify-between md:grid-cols-2 gap-4 md:gap-20 md:px-20">
      <Image src="/assets/logo.png" alt="logo" width={200} height={25} className='mx-auto  lg:mx-0' />
      <div className='flex gap-4 text-center '>
        <Link href="/"className="text-gray-500 hover:text-gray-900">Home</Link>
        <Link href="/about" className="text-gray-500 hover:text-gray-900">About</Link>
        <Link href="/contact"className="text-gray-500 hover:text-gray-900">Contact</Link>
<Link href="/blog"className="text-gray-500 hover:text-gray-900">Blog</Link>
<Link href="/login"className="text-gray-500 hover:text-gray-900">Login</Link>


      </div>
    </div>
  )
}

export default Navbar