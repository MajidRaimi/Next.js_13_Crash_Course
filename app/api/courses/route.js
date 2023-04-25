import { NextResponse } from 'next/server';

import courses from './data.json';

export const GET = async (request) => {
    return NextResponse.json(courses);
}