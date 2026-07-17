'use client';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { uploadAvatar } from '@/lib/actions/user.action';
import { Camera } from 'lucide-react';
import { useRef, useState, useTransition } from 'react';

export default function AvatarUploadDialog() {
  const fileInputEl = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const [isPending, startTransition] = useTransition();

  const imageUrl = file ? URL.createObjectURL(file) : undefined;

  const handleClickSave = () => {
    startTransition(async () => {
      if (file) {
        await uploadAvatar(file);
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
              className="rounded-full size-9 shadow absolute bottom-3 right-2"
              data-slot="dialog-trigger"
            >
              <Camera className="size-4" />
            </Button>
          }
        />

        {/* Content */}
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>Edit profile picture</DialogTitle>
          </DialogHeader>

          <div className="flex justify-center">
            <Avatar className="size-75 border">
              <AvatarImage alt="User" src={imageUrl ?? '/user.svg'} />
            </Avatar>
          </div>

          <DialogFooter>
            <div className="flex-1">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => fileInputEl.current?.click()}
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
