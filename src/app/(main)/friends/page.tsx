import EmptyState from '@/components/features/friend/EmptyState';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'All Friends'
};

export default function FriendPage() {
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
