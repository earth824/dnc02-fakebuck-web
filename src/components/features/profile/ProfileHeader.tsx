import ProfileAvatar from './ProfileAvatar';
import ProfileCover from './ProfileCover';

export default function ProfileHeader() {
  return (
    <div className="bg-background shadow-sm">
      {/* Cover */}
      <ProfileCover />
      {/* Info bar */}
      <div className="flex justify-between items-end pb-3 max-w-260 mx-auto px-4 my-7">
        {/* Left: Avatar + Name + Friend info */}
        <div className="flex items-center gap-6">
          {/* Avatar */}
          <ProfileAvatar />
          {/* Name + Friend info */}
          <div>
            <h1 className="text-3xl font-bold">Lamine Yamal</h1>
          </div>
        </div>
        {/* Right: Action button */}
        <div>ACTION BUTTON</div>
      </div>
    </div>
  );
}
