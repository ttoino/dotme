"use server";

import db from "@/db";
import { templatesTable } from "@/db/schema";
import { Template } from "@/types/template";
import { eq } from "drizzle-orm";

export const getTemplate = async (id: number): Promise<Template | null> => {
    const templates = await db()
        .select()
        .from(templatesTable)
        .where(eq(templatesTable.id, id));
    
    if (templates.length !== 1) {
        return null;
    }

    return templates[0];
}

export const getTemplates = async (): Promise<Template[]> => {
    const templates = await db()
        .select()
        .from(templatesTable);

    return templates;
}
