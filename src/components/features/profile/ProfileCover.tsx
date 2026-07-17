import Image from 'next/image';
import CoverUploadDialog from './CoverUploadDialog';
import coverImage from '@/assets/cover.svg';
import { RelationshipStatus } from '@/lib/api/api.type';

type ProfileCoverProps = {
  coverUrl?: string | null;
  relationshipStatus?: RelationshipStatus;
};

export default function ProfileCover({
  coverUrl,
  relationshipStatus
}: ProfileCoverProps) {
  return (
    <div className="relative aspect-1095/405 max-w-273.75 mx-auto overflow-hidden rounded-b-lg">
      {/* Cover photo */}
      <Image
        src={coverUrl ?? coverImage}
        alt="Cover"
        fill
        className="object-cover"
      />
      {/* Edit cover photo button */}
      {relationshipStatus === 'SELF' && (
        <CoverUploadDialog coverUrl={coverUrl} />
      )}
    </div>
  );
}
