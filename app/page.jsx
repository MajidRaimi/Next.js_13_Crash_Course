import Link from 'next/link';


const HomePage = () => {
  return (
    <div className='bg-indigo-500 flex flex-col justify-center items-center p-4'>
      <h1 className='text-white text-lg'>Welcome to <code>Next.js 13</code> crash course</h1>
      <ul className='flex space-x-4 '>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/about'>About</Link></li>
        <li><Link href='/about/team'>Team</Link></li>

      </ul>
    </div>
  )
}

export default HomePage