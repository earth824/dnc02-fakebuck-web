import LoginForm from '@/components/features/auth/LoginForm';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Login'
};

export default function LoginPage() {
  return (
    <div className="grid gap-6 w-full max-w-xl p-4">
      {/* Logo */}
      <div className="flex justify-center">
        <Image src="/logo.png" alt="Fakebuck" width={60} height={60} />
      </div>
      {/* Title */}
      <h1 className="text-lg font-semibold">Log in to your account</h1>
      {/* LoginForm */}
      <LoginForm />
      {/* Create new account button */}
      <Button
        className="rounded-full text-primary hover:text-primary border-primary py-5"
        variant="outline"
        nativeButton={false}
        render={<Link href="/register">Create new account</Link>}
      />
      {/* Meta Logo */}
      <div className="flex justify-center">
        <Image src="/meta.svg" alt="Meta" width={60} height={12} />
      </div>
    </div>
  );
}
