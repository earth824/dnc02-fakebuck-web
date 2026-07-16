import { cn } from '@/lib/utils';
import { LucideProps } from 'lucide-react';
import Link from 'next/link';

type NavigationItemProps = {
  href: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
  isActive?: boolean;
};

export default function NavigationItem({
  href,
  icon: Icon,
  isActive = false
}: NavigationItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        'relative w-28 h-12 hover:bg-muted flex items-center justify-center rounded-lg',
        isActive ? 'text-primary' : 'text-muted-foreground'
      )}
    >
      <Icon className="size-6" />
      {isActive && (
        <span className="h-0.75 bg-primary absolute left-0 right-0 -bottom-1 rounded-t-sm"></span>
      )}
    </Link>
  );
}
