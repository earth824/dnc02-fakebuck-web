import '@/styles/globals.css';
import { cn } from '@/lib/utils';
import { notoSans } from '@/styles/font';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Fakebuck',
    default: 'Fakebuck'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn('antialiased', 'font-sans', notoSans.variable)}
    >
      <body className="bg-muted-foreground/5">{children}</body>
    </html>
  );
}
