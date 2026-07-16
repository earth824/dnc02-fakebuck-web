'use client';

import { logoutAction } from '@/lib/actions/auth.action';
import { LogOut } from 'lucide-react';

export default function LogoutButton() {
  return (
    <button
      className="w-full flex items-center gap-1.5 p-2 rounded-lg"
      onClick={async () => await logoutAction()}
    >
      <div className="size-9 bg-foreground/20 rounded-full flex items-center justify-center">
        <LogOut />
      </div>
      <p className="text-sm font-medium">Log out</p>
    </button>
  );
}
