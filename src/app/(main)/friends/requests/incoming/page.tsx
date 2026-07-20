import EmptyState from '@/components/features/friend/EmptyState';
import UserList from '@/components/features/friend/UserList';
import { FriendApi } from '@/lib/api/friend.api';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Friend Requests'
};

export default async function IncomingRequestPage() {
  const users = await FriendApi.getIncomingRequests();

  if (users.length === 0) {
    return <EmptyState message="No pending friend requests." />;
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Friend requests</h1>
      <UserList users={users} />
    </div>
  );
}
