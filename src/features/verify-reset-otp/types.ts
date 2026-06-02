import { z } from "zod";
import { resetOtpSchema } from "./schema";

export type ResetOtpFormValues = z.infer<typeof resetOtpSchema>;
