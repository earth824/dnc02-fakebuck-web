import EmptyState from '@/components/features/friend/EmptyState';
import UserList from '@/components/features/friend/UserList';
import { Button } from '@/components/ui/button';
import { FriendApi } from '@/lib/api/friend.api';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'All Friends'
};

export default async function FriendPage() {
  const friends = await FriendApi.getFriend();

  if (friends.length === 0) {
    return (
      <EmptyState
        message="You don't have any friends yet. Find people you may know."
        action={
          <Button
            variant="outline"
            className="px-4"
            size="lg"
            nativeButton={false}
            render={<Link href="/friends/find">Find Friends</Link>}
          ></Button>
        }
      />
    );
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">All friends</h1>
      <UserList users={friends} />
    </div>
  );
}
