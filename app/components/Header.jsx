import Link from 'next/link';

const Header = () => {
  return (
    <div className='bg-indigo-500 flex flex-col justify-center items-center p-4'>
      <Link href='/'><h1 className='text-white text-lg'>Welcome to <code>Next.js 13</code> crash course</h1></Link>
      <ul className='flex space-x-4 text-white'>
        <li><Link href='/about'>About</Link></li>
        <li><Link href='/about/team'>Team</Link></li>
        <li><Link href='/code/repos'>Code</Link></li>

      </ul>
    </div>
  )
}

export default Header