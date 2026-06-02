import { z } from "zod";

export const resetOtpSchema = z.object({
  code: z
    .string()
    .length(6, "Enter the 6-digit verification code")
    .regex(/^[0-9]+$/, "Code must contain only digits"),
});
