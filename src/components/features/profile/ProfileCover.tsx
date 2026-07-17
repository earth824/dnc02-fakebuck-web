import Image from 'next/image';
import CoverUploadDialog from './CoverUploadDialog';
import coverImage from '@/assets/cover.svg';

export default function ProfileCover() {
  return (
    <div className="relative aspect-1095/405 max-w-273.75 mx-auto overflow-hidden rounded-b-lg">
      {/* Cover photo */}
      <Image src={coverImage} alt="Cover" fill className="object-cover" />
      {/* Edit cover photo button */}
      <CoverUploadDialog />
    </div>
  );
}
