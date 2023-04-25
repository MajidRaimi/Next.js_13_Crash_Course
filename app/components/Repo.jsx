import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

const fetchRepo = async (name) => {
    const response = await fetch(`https://api.github.com/repos/MajidRaimi/${name}`, {
        next: {
            revalidate: 60
        }
    })
    return await response.json()
}

const Repo = async ({ name }) => {
    const repo = await fetchRepo(name);



    return (
        <div className='bg-gray-100 p-4 mx-auto mt-24 rounded-md shadow-md  duration-300 max-w-lg  '>
            <h1 className='text-3xl text-center py-6 '>{repo.name}</h1>
            <div className=''>
                <p>{repo.description}</p>
                <div className='flex space-x-4 items-center '>
                    <span className='flex items-center space-x-2'>
                        <FaStar className='text-yellow-500' />
                        <div className='mt-1'>{repo.stargazers_count}</div>
                    </span>
                    <span className='flex items-center space-x-2'>
                        <FaCodeBranch className='text-slate-900' />
                        <div className='mt-1'>{repo.forks_count}</div>
                    </span>
                    <span className='flex mt-1 items-center space-x-2'>
                        <FaEye className='text-indigo-500' />
                        <div className=''>{repo.watchers_count}</div>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Repo