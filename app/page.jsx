'use client';
import { useState, useEffect } from 'react';
import LoadingPage from './loading';
import Link from 'next/link';
import { Courses, CourseSearch } from './components';

const HomePage = () => {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('http://localhost:3000/api/courses');
      const data = await response.json();
      setCourses(data);
      setLoading(false);
    }

    fetchCourses();
  }, [])

  if (loading) {
    return <LoadingPage />
  }

  return (
    <div className=''>
      <h1 className='text-center text-3xl p-4'>Welcome To Majid Al-Raimi</h1>
      <CourseSearch setCourses={setCourses} />
      <Courses courses={courses} />
    </div>
  )
}

export default HomePage