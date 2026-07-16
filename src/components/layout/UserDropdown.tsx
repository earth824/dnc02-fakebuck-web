import Link from 'next/link';
import { Avatar, AvatarImage } from '../ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '../ui/dropdown-menu';
import LogoutButton from './LogoutButton';
import { auth } from '@/lib/auth';

export default async function UserDropdown() {
  const session = await auth();

  return (
    <DropdownMenu>
      {/* Toggle user menu */}
      <DropdownMenuTrigger
        className="flex justify-end"
        render={
          <button>
            <Avatar className="size-10">
              <AvatarImage
                src={session?.user?.avatarUrl ?? '/user.svg'}
                alt="User"
              />
            </Avatar>
          </button>
        }
      />
      {/* User menu */}
      <DropdownMenuContent className="w-72 p-2">
        {/* Profile */}
        <DropdownMenuItem
          className="p-2 cursor-pointer rounded-lg"
          render={
            <Link href="/profile">
              <Avatar className="size-9">
                <AvatarImage
                  src={session?.user?.avatarUrl ?? '/user.svg'}
                  alt="User"
                />
              </Avatar>
              <div>
                <p className="text-sm font-semibold">
                  {session?.user?.firstName} {session?.user?.lastName}
                </p>
                <p className="text-xs text-muted-foreground">
                  See your profile
                </p>
              </div>
            </Link>
          }
        ></DropdownMenuItem>

        <DropdownMenuSeparator className="my-2 mx-0" />

        {/* Logout */}
        <DropdownMenuItem className="p-0">
          <LogoutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
