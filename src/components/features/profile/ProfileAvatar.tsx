import { Avatar, AvatarImage } from '@/components/ui/avatar';
import AvatarUploadDialog from './AvatarUploadDialog';
import { RelationshipStatus } from '@/lib/api/api.type';

type ProfileAvatarProps = {
  avatarUrl?: string | null;
  relationshipStatus?: RelationshipStatus;
};

export default function ProfileAvatar({
  avatarUrl,
  relationshipStatus
}: ProfileAvatarProps) {
  return (
    <div className="relative">
      <Avatar className="size-42 border">
        <AvatarImage src={avatarUrl ?? '/user.svg'} alt="User" />
      </Avatar>
      {relationshipStatus === 'SELF' && (
        <AvatarUploadDialog avatarUrl={avatarUrl} />
      )}
    </div>
  );
}
