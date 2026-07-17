import { Avatar, AvatarImage } from '@/components/ui/avatar';
import AvatarUploadDialog from './AvatarUploadDialog';

type ProfileAvatarProps = {
  avatarUrl?: string | null;
};

export default function ProfileAvatar({ avatarUrl }: ProfileAvatarProps) {
  return (
    <div className="relative">
      <Avatar className="size-42 border">
        <AvatarImage src={avatarUrl ?? '/user.svg'} alt="User" />
      </Avatar>
      <AvatarUploadDialog avatarUrl={avatarUrl} />
    </div>
  );
}
