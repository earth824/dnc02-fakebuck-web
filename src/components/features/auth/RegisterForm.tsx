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
import { capitalizeFirstCha } from '@/lib/utils';
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
          <Controller
            control={control}
            name="lastName"
            render={({ field, fieldState }) => (
              <Field className="gap-1" data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Last name</FieldLabel>
                <Input
                  placeholder="Last name"
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
        </div>
        {/* Date of birth */}
        <Controller
          control={control}
          name="dob"
          render={({ field, fieldState }) => (
            <Field className="gap-1" data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Date of birth</FieldLabel>
              <DatePickerInput
                isInValid={fieldState.invalid}
                value={field.value}
                onValueChange={field.onChange}
              />
            </Field>
          )}
        />
        {/* Gender */}
        <Controller
          control={control}
          name="gender"
          render={({ field, fieldState }) => (
            <Field className="gap-1" data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Gender</FieldLabel>
              <Select
                name={field.name}
                value={capitalizeFirstCha(field.value) ?? ''}
                onValueChange={field.onChange}
              >
                <SelectTrigger
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                >
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent alignItemWithTrigger={false}>
                  <SelectItem value="FEMALE">Female</SelectItem>
                  <SelectItem value="MALE">Male</SelectItem>
                  <SelectItem value="OTHER">Other</SelectItem>
                </SelectContent>
              </Select>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        {/* Eamil address */}
        <Controller
          control={control}
          name="email"
          render={({ field, fieldState }) => (
            <Field className="gap-1" data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Email address</FieldLabel>
              <Input
                type="email"
                placeholder="a@mail.com"
                id={field.name}
                {...field}
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        {/* Password */}
        <Controller
          control={control}
          name="password"
          render={({ field, fieldState }) => (
            <Field className="gap-1" data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Password</FieldLabel>
              <Input
                placeholder="••••••••"
                type="password"
                id={field.name}
                {...field}
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
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
