import EmptyState from '@/components/features/friend/EmptyState';
import UserList from '@/components/features/friend/UserList';
import { Button } from '@/components/ui/button';
import { FriendApi } from '@/lib/api/friend.api';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sent Requests'
};

export default async function OutgoingRequestPage() {
  const users = await FriendApi.getOutgoingRequests();

  if (users.length === 0) {
    return (
      <EmptyState
        message="You haven't sent any friend requests yet."
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
      <h1 className="text-2xl font-bold">Sent requests</h1>
      <UserList users={users} />
    </div>
  );
}
