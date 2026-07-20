import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function UserCard() {
  return (
    <div className="bg-background border rounded-lg shadow w-full max-w-60">
      {/* User image */}
      <div className="relative w-full aspect-square">
        <Image alt="User" src="/user.svg" fill />
      </div>
      {/* User info */}
      <div className="p-3 grid gap-3">
        <p className="text-sm font-semibold leading-tight truncate">
          David Rayaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </p>
        <div className="grid gap-2">
          <Button className="rounded-lg">Add Friend</Button>
          <Button className="rounded-lg" variant="outline">
            Add Friend
          </Button>
        </div>
      </div>
    </div>
  );
}
