import { RelationshipStatus, UserResponse } from '@/lib/api/api.type';
import UserCard from './UserCard';

type UserListProps = {
  users: UserResponse[];
  relationShipStatus: Exclude<RelationshipStatus, 'SELF'>;
};

export default function UserList({ users, relationShipStatus }: UserListProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-2">
      {users.map((user) => (
        <UserCard
          key={user.id}
          {...user}
          relationShipStatus={relationShipStatus}
        />
      ))}
    </div>
  );
}
