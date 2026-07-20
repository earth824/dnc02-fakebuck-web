import UserList from '@/components/features/friend/UserList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Find People'
};

export default function FindFriendPage() {
  return (
    <div className="space-y-4">
      {/* Title */}
      <h1 className="text-2xl font-bold">People you may know</h1>
      {/* User list */}
      <UserList />
    </div>
  );
}
