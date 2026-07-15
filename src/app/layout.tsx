import '@/styles/globals.css';
import { cn } from '@/lib/utils';
import { notoSans } from '@/styles/font';

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
      <body>{children}</body>
    </html>
  );
}
