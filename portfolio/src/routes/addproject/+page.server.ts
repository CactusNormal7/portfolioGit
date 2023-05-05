// src/routes/+page.server.ts
import { fail } from "@sveltejs/kit";
import prisma from "$lib/prisma";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    return {
        projects : await prisma.post.findMany()
    }
};

export const actions: Actions = {
    createProject : async ({request}) => {
        const {name, desc,repo,image} = Object.fromEntries(await request.formData()) as {
            name: string
            desc :string
            repo: string
            image: string
        }
        try {
            await prisma.post.create({
                data : {
                    name,
                    desc,
                    repo,
                    image
                }
            })
        }catch (err) {
            console.log(err);
            return fail(500, {message: "Could not create the article."})
        }

        return{
            status : 201
        }
    },
}
