import UserCard from './UserCard';

export default function UserList() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-2">
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  );
}
