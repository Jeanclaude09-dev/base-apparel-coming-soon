import { z } from "zod";

export const emailSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please provide a valid email"),
});
