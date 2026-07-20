import { RelationshipStatus, UserResponse } from '@/lib/api/api.type';
import Image from 'next/image';
import { FRIEND_ACTION_MAP } from './FriendActionMap';
import ActionButton from './ActionButton';

type UserCardProps = UserResponse & {
  relationShipStatus: Exclude<RelationshipStatus, 'SELF'>;
};

export default function UserCard({
  id,
  avatarUrl,
  firstName,
  lastName,
  relationShipStatus
}: UserCardProps) {
  const { confirm, cancel } = FRIEND_ACTION_MAP[relationShipStatus];

  return (
    <div className="bg-background border rounded-lg shadow w-full max-w-60 overflow-hidden">
      {/* User image */}
      <div className="relative w-full aspect-square">
        <Image alt="User" src={avatarUrl ?? '/user.svg'} fill sizes="auto" />
      </div>
      {/* User info */}
      <div className="p-3 grid gap-3">
        <p className="text-sm font-semibold leading-tight truncate">
          {firstName} {lastName}
        </p>
        {/* Friend action */}
        <div className="grid gap-2">
          {confirm && (
            <ActionButton
              targetUserId={id}
              variant={confirm.variant}
              onClickAction={confirm.onClickAction}
            >
              {confirm.children}
            </ActionButton>
          )}
          {cancel && (
            <ActionButton
              targetUserId={id}
              variant={cancel.variant}
              onClickAction={cancel.onClickAction}
            >
              {cancel.children}
            </ActionButton>
          )}
        </div>
      </div>
    </div>
  );
}
