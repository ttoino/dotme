"use server";

import db from "@/db";
import { portfolioTable} from "@/db/schema";
import {  portfolio_entry } from "@/types/cv";
import { eq } from "drizzle-orm";

export const getPortfolioEntries = async (email: string): Promise<portfolio_entry[] | null> => {
    const portfolio_entries = await db
        .select()
        .from(portfolioTable)
        .where(eq(portfolioTable.userId, email))

    if(portfolio_entries.length < 0) {
        console.log("No portfolio entries")
        return null
    }

    const portfolio_info: portfolio_entry[] = portfolio_entries.map((value) => ({
        type: value.type,
        id: value.foreignId.toString(),
        x: value.x,
        y: value.y,
        w: value.width,
        h: value.height,
      }));

    return portfolio_info
}