import Link from 'next/link';
import { Courses } from './components';

const HomePage = () => {
  return (
    <div className=''>
      <h1 className='text-center text-3xl p-4'>Welcome To Majid Al-Raimi</h1>
      <Courses />
    </div>
  )
}

export default HomePage