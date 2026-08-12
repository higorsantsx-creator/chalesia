import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const sendQuote = createServerFn({ method: "POST" })
  .inputValidator((data) => z.object({
    name: z.string(),
    whatsapp: z.string(),
    email: z.string().email(),
    city: z.string(),
    projectType: z.string(),
    objective: z.string(),
    numberOfChalets: z.string(),
    approximateSize: z.string(),
    hasLand: z.string(),
    deadline: z.string(),
    message: z.string().optional(),
  }).parse(data))
  .handler(async ({ data }) => {
    // In a real app, this would send an email or save to a database.
    // For now, we return success.
    console.log("Quote request received:", data);
    return { success: true };
  });
