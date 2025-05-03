"use server";

import db from "@/db";
import { portfolioTable} from "@/db/schema";
import {  portfolio_entry } from "@/types/cv";
import { and, eq } from "drizzle-orm";

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

    console.log(portfolio_info)

    return portfolio_info
}

export const updatePortfolioEntry = async (entry: portfolio_entry) => {
    try {
      const result = await db
        .update(portfolioTable)
        .set({
          x: entry.x,
          y: entry.y,
          width: entry.width,
          height: entry.height,
        })
        .where(
            and(
                eq(portfolioTable.userId, entry.userId),
                eq(portfolioTable.foreignId, entry.foreignId)
            ));
  
      if (result) {
        console.log(`Portfolio entry for ${entry.foreignId} updated.`);
      }
    } catch (error) {
      console.error("Error updating portfolio entry:", error);
    }
  };