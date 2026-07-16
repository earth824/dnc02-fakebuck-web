import Image from 'next/image';
import Link from 'next/link';
import MainNavigation from './MainNavigation';
import UserDropdown from './UserDropdown';

export default function Header() {
  return (
    <header className="grid grid-cols-3 sticky inset-0 bg-background shadow-sm px-4 h-14 z-50 items-center">
      {/* Left: Logo */}
      <Link href="/" className="size-10 relative">
        <Image src="/logo.png" alt="Fakebuck" fill sizes="auto" />
      </Link>

      {/* Center: MainNavigation */}
      <MainNavigation />

      {/* Right: UserDropdown */}
      <UserDropdown />
    </header>
  );
}
