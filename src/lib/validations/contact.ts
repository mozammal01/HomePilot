import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().min(1, "Email is required.").email("Enter a valid email address."),
  company: z.string().trim().optional(),
  phone: z.string().trim().optional(),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a bit more — at least 10 characters.")
    .max(2000, "Message is too long."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
