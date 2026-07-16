'use client';

import { Home, Users } from 'lucide-react';
import NavigationItem from './NavigationItem';
import { usePathname } from 'next/navigation';

const NAVIGATION_ITEMS = [
  { icon: Home, href: '/' },
  // { icon: User, href: '/profile' },
  { icon: Users, href: '/friends' }
] as const;

export default function MainNavigation() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-center gap-2">
      {NAVIGATION_ITEMS.map((item) => (
        <NavigationItem
          key={item.href}
          href={item.href}
          icon={item.icon}
          isActive={
            item.href === '/'
              ? pathname === '/'
              : pathname.startsWith(item.href)
          }
        />
      ))}
    </nav>
  );
}
