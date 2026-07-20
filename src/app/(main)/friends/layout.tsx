import FriendNavigation from '@/components/features/friend/FriendNavigation';

export default function FriendLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[16rem_1fr]">
      <aside className="bg-background sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto shadow p-3">
        <h1 className="px-2 text-2xl font-bold py-3">Friends</h1>
        <FriendNavigation />
      </aside>
      <main className="p-8">{children}</main>
    </div>
  );
}
