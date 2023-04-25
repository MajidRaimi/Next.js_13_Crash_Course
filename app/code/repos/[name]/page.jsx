import { Suspense } from 'react';
import Link from 'next/link';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Repo, RepoDirs } from '@/app/components'

const RepoPage = ({ params }) => {
    const { name } = params;
    return (
        <div>
            <Link href='/code/repos' className=''>
                <AiOutlineArrowLeft className='m-4 hover:color-indigo-500 duration-300' />
            </Link>


            <div className='max-w-lg mx-auto'>
                <Suspense fallback={<div className='text-center'></div>}>
                    <Repo name={name} />
                </Suspense>
                <Suspense fallback={<div className=''>Loading Files And Directory</div>}>
                    <RepoDirs name={name} />
                </Suspense>
            </div>
        </div>


    )
}

export default RepoPage