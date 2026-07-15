import z, { email } from 'zod';

export const registerSchema = z.object({
  firstName: z
    .string('First name must be a string.')
    .min(1, 'First name is required.'),
  lastName: z
    .string('Last name must be a string.')
    .min(1, 'Last name is required.'),
  dob: z.date('Invalid date.'),
  gender: z.enum(
    ['FEMALE', 'MALE', 'OTHER'],
    'Gender must be one of the following values: FEMALE, MALE, OTHER.'
  ),
  email: z.email('Invalid email address.'),
  password: z
    .string('Password must be a string.')
    .regex(
      /^[0-9a-zA-Z]{6,}$/,
      'Password can only contains a letter or number and must have at least 6 characters.'
    )
});

export type RegisterInput = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.email('Invalid email address.'),
  password: z
    .string('Password must be a string.')
    .min(1, 'Password is required.')
});

export type LoginInput = z.infer<typeof loginSchema>;
