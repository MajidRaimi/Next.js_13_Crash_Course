import { NextResponse } from "next/server";

import courses from '../data.json'

export const GET = async (request) => {

    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query');

    if (!query) {
        return NextResponse.json(courses);
    }

    const filteredCourses = courses.filter((course) => {
        return course.title.toLowerCase().includes(query.toLowerCase());
    });

    return NextResponse.json(filteredCourses);
}

export const POST = async (request) => {
    const { title, description, level, link } = await request.json();

    const newCourse = {
        id: courses.length + 1,
        title,
        description,
        level,
        link,
    }

};