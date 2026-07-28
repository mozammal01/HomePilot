import { z } from "zod";

export const newsletterFormSchema = z.object({
  email: z.string().trim().min(1, "Email is required.").email("Enter a valid email address."),
});

export type NewsletterFormValues = z.infer<typeof newsletterFormSchema>;
