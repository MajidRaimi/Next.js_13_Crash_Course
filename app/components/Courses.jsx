import Link from 'next/link'

const fetchCourses = async () => {
    const response = await fetch('http://localhost:3000/api/courses')
    return await response.json()
}

const Courses = async () => {

    const courses = await fetchCourses();

    return (
        <div className='flex flex-col space-y-4'>

            {courses.map((course) => (
                <div className='bg-slate-200 rounded shadow max-w-lg mx-auto'>
                    <div className='flex flex-row justify-between'>
                        <div className='flex flex-col p-4'>
                            <h1 className='text-xl font-bold'>{course.title}</h1>
                            <p className='text-sm'>{course.description}</p>
                        </div>
                        <div className='flex flex-col p-4'>
                            <Link href={`/courses/${course.id}`} className='bg-slate-400 text-white rounded p-2'>
                                View
                            </Link>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Courses