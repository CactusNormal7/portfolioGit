// src/routes/+page.server.ts
import { fail } from "@sveltejs/kit";
import prisma from "$lib/prisma";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    return {
        projects : await prisma.post.findMany()
    }
};