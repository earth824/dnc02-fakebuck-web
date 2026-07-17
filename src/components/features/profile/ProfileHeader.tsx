import { UserProfileResponse } from '@/lib/api/api.type';
import ProfileAvatar from './ProfileAvatar';
import ProfileCover from './ProfileCover';
import FriendInfo from './FriendInfo';

type ProfileHeaderProps = UserProfileResponse;

export default function ProfileHeader({
  user,
  relationshipStatus,
  friends
}: ProfileHeaderProps) {
  return (
    <div className="bg-background shadow-sm">
      {/* Cover */}
      <ProfileCover
        coverUrl={user.coverUrl}
        relationshipStatus={relationshipStatus}
      />
      {/* Info bar */}
      <div className="flex justify-between items-end pb-3 max-w-260 mx-auto px-4 my-7">
        {/* Left: Avatar + Name + Friend info */}
        <div className="flex items-center gap-6">
          {/* Avatar */}
          <ProfileAvatar
            avatarUrl={user.avatarUrl}
            relationshipStatus={relationshipStatus}
          />
          {/* Name + Friend info */}
          <div>
            <h1 className="text-3xl font-bold">
              {user.firstName} {user.lastName}
            </h1>
            <FriendInfo friends={friends} />
          </div>
        </div>
        {/* Right: Action button */}
        <div>ACTION BUTTON</div>
      </div>
    </div>
  );
}
