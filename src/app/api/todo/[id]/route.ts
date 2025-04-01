//here we will implement all the delete and update functions
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

//initisalizing prisma
const prisma = new PrismaClient();

//Writing the delete api
export async function DELETE(req: Request, {params}: {params: {id: string}}) {
    const id = parseInt(params.id);

    if(isNaN(id)) {
        return NextResponse.json({error: 'Invalid ID given'}, {status: 400})
    };

    await prisma.todo.delete({
        where: {id}
    });

    return NextResponse.json({message: 'Todo has been deleted'});
};


//updating the app
export async function PATCH(req: Request, {params}: {params: {id: string}}) {
    try {
        const id = parseInt(params.id);
        const body = await req.json();

        const updated = await prisma.todo.update({
            where: {id},
            data: body
        });

        return NextResponse.json(updated);

    } catch (error) {
        console.log(error);
        NextResponse.json({error: 'Faild to update the todo'}, {status: 500});
    };
};