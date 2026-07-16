import ProfileHeader from '@/components/features/profile/ProfileHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Profile'
};

export default function ProfilePage() {
  return <ProfileHeader />;
}
