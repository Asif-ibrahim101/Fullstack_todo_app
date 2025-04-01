//here we will do our POST and GET routes
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

//Get request for getting all the todos
export async function GET() {
    const todos = await prisma.todo.findMany(
        {
            orderBy: {createdAt: 'desc'}
        }
    );

    return NextResponse.json(todos);
};

//POST request to put all the todos in the database for it to show
export async function POST(req: Request) {
    const {title} = await req.json();

    if(!title) {
        return NextResponse.json({error: "titel is required"}, {status: 400})
        console.log("There is some promlem in the post request")
    };

    const newTodo = await prisma.todo.create({
        data: {title},
    })

    return NextResponse.json(newTodo);
};