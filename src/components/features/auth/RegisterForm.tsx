'use client';

import DatePickerInput from '@/components/shared/DatePickerInput';
import { Button } from '@/components/ui/button';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { RegisterInput, registerSchema } from '@/lib/schemas/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';

export default function RegisterForm() {
  const { control, handleSubmit } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      dob: undefined,
      gender: undefined,
      email: '',
      password: ''
    }
  });

  const onSubmit = (data: RegisterInput) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldGroup className="gap-4">
        <div className="grid grid-cols-2 gap-4">
          {/* First name */}
          <Controller
            control={control}
            name="firstName"
            render={({ field, fieldState }) => (
              <Field className="gap-1" data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>First name</FieldLabel>
                <Input
                  placeholder="First name"
                  id={field.name}
                  {...field}
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          {/* Last name */}
          <Field className="gap-1">
            <FieldLabel htmlFor="lastName">Last name</FieldLabel>
            <Input placeholder="Last name" id="lastName" />
          </Field>
        </div>
        {/* Date of birth */}
        <Field className="gap-1">
          <FieldLabel htmlFor="dob">Date of birth</FieldLabel>
          <DatePickerInput />
        </Field>
        {/* Gender */}
        <Field className="gap-1">
          <FieldLabel htmlFor="gender">Gender</FieldLabel>
          <Select>
            <SelectTrigger id="gender">
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent alignItemWithTrigger={false}>
              <SelectItem value="Female">Female</SelectItem>
              <SelectItem value="Male">Male</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        {/* Eamil address */}
        <Field className="gap-1">
          <FieldLabel htmlFor="email">Email address</FieldLabel>
          <Input placeholder="a@mail.com" type="email" id="email" />
        </Field>
        {/* Password */}
        <Field className="gap-1">
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input placeholder="••••••••" type="password" id="password" />
        </Field>
        {/* Submit button */}
        <Field>
          <Button type="submit" className="rounded-full py-5">
            Submit
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
