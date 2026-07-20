import { Users } from 'lucide-react';

type EmptyStateProps = {
  message: string;
  action?: React.ReactNode;
};

export default function EmptyState({ message, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col justify-center items-center h-full gap-4">
      <Users className="size-24 text-muted-foreground/40" />
      <p className="text-muted-foreground font-medium">{message}</p>
      {action}
    </div>
  );
}
