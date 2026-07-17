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
import { Camera } from 'lucide-react';
import { useRef } from 'react';

export default function AvatarUploadDialog() {
  const fileInputEl = useRef<HTMLInputElement | null>(null);
  return (
    <>
      <input type="file" className="hidden" ref={fileInputEl} />
      <Dialog>
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
              <AvatarImage alt="User" src="/user.svg" />
            </Avatar>
          </div>

          <DialogFooter>
            <div className="flex-1">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => fileInputEl.current?.click()}
              >
                Choose cover photo
              </Button>
            </div>
            {
              <div className="flex-1">
                <Button className="w-full">Save</Button>
              </div>
            }
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
