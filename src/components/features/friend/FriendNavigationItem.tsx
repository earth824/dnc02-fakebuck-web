import { cn } from '@/lib/utils';
import { LucideProps } from 'lucide-react';
import Link from 'next/link';

type FriendNavigationItemProps = {
  href: string;
  label: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
  active?: boolean;
};

export default function FriendNavigationItem({
  href,
  icon: Icon,
  label,
  active
}: FriendNavigationItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-4 px-3 py-2.5 rounded-lg',
        active ? 'text-primary' : 'hover:bg-muted'
      )}
    >
      <div
        className={cn(
          'size-9 rounded-full flex items-center justify-center',
          active ? 'bg-primary/20' : 'bg-muted-foreground/30'
        )}
      >
        <Icon className="size-5" />
      </div>
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
}
