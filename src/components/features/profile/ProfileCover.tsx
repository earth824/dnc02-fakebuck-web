import Image from 'next/image';

export default function ProfileCover() {
  return (
    <div className="relative aspect-1095/405 max-w-273.75 mx-auto overflow-hidden rounded-b-lg">
      {/* Cover photo */}
      <Image src="cover.svg" alt="Cover" fill className="object-cover" />
      {/* Edit cover photo button */}
    </div>
  );
}
