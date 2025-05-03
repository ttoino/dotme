"use server";

import db from "@/db";
import { templatesTable, templateUserRelation } from "@/db/schema";
import { Template } from "@/types/template";
import { eq } from "drizzle-orm";
import { getSessionEmail } from "./auth";
import { revalidatePath } from "next/cache";

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

export const acquireTemplate = async (id: number): Promise<boolean | null> => {
    const sessionEmail = await getSessionEmail();

    if (!sessionEmail) {
        return null;
    }

    const [result] = await db()
        .insert(templateUserRelation)
        .values({
            userId: sessionEmail,
            templateId: id
        });

    revalidatePath("");

    return result.affectedRows >= 1;
}

export const getTemplates = async (): Promise<Template[]> => {
    const sessionEmail = await getSessionEmail();

    const sq = sessionEmail ? db()
        .select()
        .from(templateUserRelation)
        .where(eq(templateUserRelation.userId, sessionEmail))
        .as("template_user_relation") : templateUserRelation;
    const templates = await db()
        .select()
        .from(templatesTable)
        .leftJoin(sq, eq(templateUserRelation.templateId, templatesTable.id));

    return templates.map((template) => ({
        ...template.templates_table,
        owned: !!template.template_user_relation
    }));
}
