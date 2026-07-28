import { z } from "zod";

export const demoRequestSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().min(1, "Email is required.").email("Enter a valid email address."),
  company: z.string().trim().min(2, "Please enter your company name."),
  portfolioSize: z.string().trim().min(1, "Let us know roughly how many units you manage."),
});

export type DemoRequestValues = z.infer<typeof demoRequestSchema>;
