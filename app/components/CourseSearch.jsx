'use client';
import { useState } from 'react';

const CourseSearch = ({ setCourses }) => {

    const [search, setSearch] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`http://localhost:3000/api/courses/search/?query=${search}`);
        const data = await response.json();
        setCourses(data)
    }


    return (
        <form className='max-w-lg mx-auto m-2  justify-between flex gap-2'>
            <input type='text' className='border-2 border-gray-300 p-2 rounded-lg grow' placeholder='Search for a course' value={search} onChange={(e) => setSearch(e.target.value)} />
            <button type='submit' className='bg-indigo-500 text-white p-2 rounded-lg' onClick={onSubmit}>Search</button>
        </form>
    )
}

export default CourseSearch