'use client';

import { UserCheck, UserPlus, Users, UserX } from 'lucide-react';
import FriendNavigationItem from './FriendNavigationItem';
import { usePathname } from 'next/navigation';

const FRIEND_NAVIGATION_ITEMS = [
  { icon: Users, href: '/friends', label: 'All Friends' },
  {
    icon: UserCheck,
    href: '/friends/requests/incoming',
    label: 'Friend Requests'
  },
  { icon: UserX, href: '/friends/requests/outgoing', label: 'Sent Requests' },
  { icon: UserPlus, href: '/friends/find', label: 'Find People' }
] as const;

export default function FriendNavigation() {
  const pathname = usePathname();

  return (
    <div className="grid gap-1">
      {FRIEND_NAVIGATION_ITEMS.map((item) => (
        <FriendNavigationItem
          key={item.href}
          href={item.href}
          icon={item.icon}
          label={item.label}
          active={pathname === item.href}
        />
      ))}
    </div>
  );
}
