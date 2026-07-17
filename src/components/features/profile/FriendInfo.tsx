import { Avatar, AvatarGroup, AvatarImage } from '@/components/ui/avatar';
import { UserResponse } from '@/lib/api/api.type';
import Link from 'next/link';

type FriendInfoProps = {
  friends?: UserResponse[];
};

export default function FriendInfo({ friends = [] }: FriendInfoProps) {
  if (friends.length === 0) return null;

  return (
    <div>
      <p className="text-muted-foreground text-sm font-semibold py-1">
        {friends.length} friends
      </p>
      <AvatarGroup>
        {friends.map((user) => (
          <Link key={user.id} href={`/profile/${user.id}`}>
            <Avatar>
              <AvatarImage alt="User" src={user.avatarUrl ?? 'user.png'} />
            </Avatar>
          </Link>
        ))}
      </AvatarGroup>
    </div>
  );
}
