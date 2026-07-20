import EmptyState from '@/components/features/friend/EmptyState';
import UserList from '@/components/features/friend/UserList';
import { FriendApi } from '@/lib/api/friend.api';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Find People'
};

export default async function FindFriendPage() {
  const users = await FriendApi.getSuggestionFriend();

  if (users.length === 0) {
    return <EmptyState message="No friend suggestions." />;
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">People you may know</h1>
      <UserList users={users} relationShipStatus="NONE" />
    </div>
  );
}
