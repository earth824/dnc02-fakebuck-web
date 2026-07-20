import { Button } from '@/components/ui/button';
import { UserResponse } from '@/lib/api/api.type';
import Image from 'next/image';

type UserCardProps = UserResponse;

export default function UserCard({
  avatarUrl,
  firstName,
  lastName
}: UserResponse) {
  return (
    <div className="bg-background border rounded-lg shadow w-full max-w-60 overflow-hidden">
      {/* User image */}
      <div className="relative w-full aspect-square">
        <Image alt="User" src={avatarUrl ?? '/user.svg'} fill sizes="auto" />
      </div>
      {/* User info */}
      <div className="p-3 grid gap-3">
        <p className="text-sm font-semibold leading-tight truncate">
          {firstName} {lastName}
        </p>
        {/* Friend action */}
        <div className="grid gap-2">
          <Button className="rounded-lg">Unfriend</Button>
          <Button className="rounded-lg" variant="outline">
            Add Friend
          </Button>
        </div>
      </div>
    </div>
  );
}
