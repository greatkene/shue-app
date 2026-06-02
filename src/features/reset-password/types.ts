import { z } from "zod";
import { resetPasswordSchema } from "./schema";

export type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;
