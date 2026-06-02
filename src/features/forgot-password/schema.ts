import { z } from "zod";

const PHONE_REGEX = /^[0-9+\-\s()]{7,}$/;

export const forgotPasswordSchema = z
  .object({
    method: z.enum(["phone", "email"]),
    identifier: z.string().min(1, "This field is required"),
  })
  .superRefine((data, ctx) => {
    if (data.method === "email") {
      if (!z.string().email().safeParse(data.identifier).success) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["identifier"],
          message: "Enter a valid email address",
        });
      }
      return;
    }

    if (!PHONE_REGEX.test(data.identifier)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["identifier"],
        message: "Enter a valid phone number",
      });
    }
  });
