'use client';

import { Button } from '@/components/ui/button';
import { ErrorActionResult } from '@/lib/actions/action.type';
import { Loader } from 'lucide-react';
import { useTransition } from 'react';

export type ActionButtonProps = {
  variant: 'default' | 'outline' | 'destructive';
  children: React.ReactNode;
  targetUserId: string;
  onClickAction: (userId: string) => Promise<ErrorActionResult>;
};

export default function ActionButton({
  variant,
  children,
  onClickAction,
  targetUserId
}: ActionButtonProps) {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(async () => {
      await onClickAction(targetUserId);
    });
  };

  return (
    <Button
      variant={variant}
      className="rounded-lg font-semibold"
      size="lg"
      onClick={handleClick}
      disabled={isPending}
    >
      {isPending ? <Loader className="animate-spin" /> : children}
    </Button>
  );
}
