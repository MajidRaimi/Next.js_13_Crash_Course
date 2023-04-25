
const Courses = ({ courses }) => {


    return (
        <div className='flex flex-col space-y-4'>

            {courses.map((course, index) => (
                <div key={index} className='bg-slate-200 rounded shadow max-w-lg mx-auto'>
                    <div className='flex flex-row justify-between'>
                        <div className='flex flex-col p-4'>
                            <h1 className='text-xl font-bold'>{course.title}</h1>
                            <p className='text-sm'>{course.description}</p>
                        </div>
                        <div className='flex flex-col p-4'>

                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Courses