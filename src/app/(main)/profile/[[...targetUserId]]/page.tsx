import ProfileHeader from '@/components/features/profile/ProfileHeader';
import { UserApi } from '@/lib/api/user.api';
import { auth } from '@/lib/auth';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Profile'
};

export default async function ProfilePage(
  props: PageProps<'/profile/[[...targetUserId]]'>
) {
  const session = await auth();

  const params = await props.params;
  const targetUserId = params.targetUserId
    ? params.targetUserId[0]
    : (session?.user?.id as string);

  const { user, friends, relationshipStatus } =
    await UserApi.getUserProfile(targetUserId);
  return (
    <ProfileHeader
      user={user}
      friends={friends}
      relationshipStatus={relationshipStatus}
    />
  );
}
