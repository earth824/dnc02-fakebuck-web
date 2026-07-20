import { UserResponse } from '@/lib/api/api.type';
import UserCard from './UserCard';

type UserListProps = {
  users: UserResponse[];
};

export default function UserList({ users }: UserListProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-2">
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
}
