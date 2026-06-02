import { z } from "zod";
import { forgotPasswordSchema } from "./schema";

export type ForgotPasswordMethod = "phone" | "email";

export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;
