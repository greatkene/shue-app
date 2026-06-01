import { z } from "zod";

const PHONE_REGEX = /^[0-9+\-\s()]{7,}$/;

export const loginSchema = z
  .object({
    method: z.enum(["phone", "email"]),
    identifier: z.string().min(1, "This field is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
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

export const signUpSchema = z.object({
  fullName: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().regex(PHONE_REGEX, "Enter a valid phone number"),
  agreeToTerms: z
    .boolean()
    .refine((value) => value === true, {
      message: "You must agree to the terms to continue",
    }),
});

export const otpSchema = z.object({
  code: z
    .string()
    .length(6, "Enter the 6-digit verification code")
    .regex(/^[0-9]+$/, "Code must contain only digits"),
});

export const completeDetailsSchema = z
  .object({
    username: z.string().min(3, "Username must be at least 3 characters"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(1, "Confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });
