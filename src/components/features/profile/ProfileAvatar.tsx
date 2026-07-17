import { Avatar, AvatarImage } from '@/components/ui/avatar';
import AvatarUploadDialog from './AvatarUploadDialog';

export default function ProfileAvatar() {
  return (
    <div className="relative">
      <Avatar className="size-42 border">
        <AvatarImage src="/user.svg" alt="User" />
      </Avatar>
      <AvatarUploadDialog />
    </div>
  );
}
