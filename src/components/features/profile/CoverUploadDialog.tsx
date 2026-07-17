'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { uploadCoverAction } from '@/lib/actions/user.action';
import { Camera } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState, useTransition } from 'react';

type CoverUploadDialogProps = {
  coverUrl?: string | null;
};

export default function CoverUploadDialog({
  coverUrl
}: CoverUploadDialogProps) {
  const fileInputEl = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isPending, startTransition] = useTransition();

  const imageUrl = file ? URL.createObjectURL(file) : coverUrl;

  const handleClickSave = () => {
    startTransition(async () => {
      if (file) {
        await uploadCoverAction(file);
      }
    });
  };

  return (
    <>
      <input
        type="file"
        className="hidden"
        ref={fileInputEl}
        onChange={(e) => {
          if (e.target.files) {
            setFile(e.target.files[0]);
          }
        }}
      />
      <Dialog
        onOpenChange={(current) => {
          if (!current) {
            setFile(null);
          }
        }}
      >
        {/* Trigger */}
        <DialogTrigger
          render={
            <Button
              variant="outline"
              className="absolute bottom-4 right-4 shadow font-semibold rounded-lg bg-background"
              data-slot="dialog-trigger"
            >
              <Camera className="size-4" />
              Edit cover photo
            </Button>
          }
        />
        {/* Content */}
        <DialogContent className="sm:max-w-6xl">
          <DialogHeader>
            <DialogTitle>Edit cover photo</DialogTitle>
          </DialogHeader>
          <div className="relative aspect-1095/405 rounded-lg overflow-hidden">
            <Image
              alt="Cover"
              src={imageUrl ?? 'cover.svg'}
              fill
              className="object-cover"
            />
          </div>
          <DialogFooter>
            <div className="flex-1">
              <Button
                variant="outline"
                onClick={() => fileInputEl.current?.click()}
                className="w-full"
                disabled={isPending}
              >
                Choose cover photo
              </Button>
            </div>
            {file && (
              <div className="flex-1">
                <Button
                  className="w-full"
                  onClick={handleClickSave}
                  disabled={isPending}
                >
                  Save
                </Button>
              </div>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
