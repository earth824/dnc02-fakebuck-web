import DatePickerInput from '@/components/shared/DatePickerInput';
import { Button } from '@/components/ui/button';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

export default function RegisterForm() {
  return (
    <form>
      <FieldGroup className="gap-4">
        <div className="grid grid-cols-2 gap-4">
          {/* First name */}
          <Field className="gap-1">
            <FieldLabel htmlFor="firstName">First name</FieldLabel>
            <Input placeholder="First name" id="firstName" />
          </Field>
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
          <Button className="rounded-full py-5">Submit</Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
