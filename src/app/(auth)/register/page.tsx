import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import RegisterForm from '@/components/features/auth/RegisterForm';

export const metadata: Metadata = {
  title: 'Register'
};

export default function RegisterPage() {
  return (
    <div className="p-4 w-full max-w-xl grid gap-6">
      {/* Back button */}
      <div className="-ml-4">
        <Button
          className="rounded-full size-10"
          variant="ghost"
          nativeButton={false}
          render={
            <Link href="/login">
              <ChevronLeft />
            </Link>
          }
        />
      </div>
      {/* Meta logo */}
      <Image src="/meta.svg" alt="Meta" width={60} height={12} />
      {/* Title */}
      <div className="space-y-1.5">
        <h1 className="text-2xl font-semibold">Get started on Facebook</h1>
        <p className="text-sm leading-tight text-muted-foreground">
          Create an account to connect with friends, family and communities of
          people who share your interests.
        </p>
      </div>
      {/* Register form */}
      <RegisterForm />
      {/* Already have account button */}
      <Button
        className="rounded-full py-5"
        variant="outline"
        nativeButton={false}
        render={<Link href="/login">I already have an account</Link>}
      />
    </div>
  );
}
