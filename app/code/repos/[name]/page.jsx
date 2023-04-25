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
            <Repo name={name} />
            <RepoDirs name={name} />
        </div>


    )
}

export default RepoPage