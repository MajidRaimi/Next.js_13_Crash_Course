import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

const fetchRepos = async () => {
    const response = await fetch('https://api.github.com/users/MajidRaimi/repos',
        {
            next: {
                revalidate: 60
            }
        }
    )
    return await response.json()
}


const ReposPage = async () => {
    const repos = await fetchRepos();

    // await new Promise((resolve) => setTimeout(resolve, 1000));

    return (
        <div>
            <h1 className='text-3xl text-center py-6 '>Repositories</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center '>
                {
                    repos.map((repo, index) => (
                        <Link key={index} href={`/code/repos/${repo.name}`} className='col-span-1 w-5/6 mx-auto h-full'>
                            <div className='bg-gray-100 p-4 rounded-md shadow-md  duration-300 hover:bg-gray-200 hover:-translate-y-2 '>
                                <h2 className='text-xl font-semibold text-center'>{repo.name}</h2>
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
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default ReposPage