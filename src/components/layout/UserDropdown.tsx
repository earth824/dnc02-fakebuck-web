import { Avatar, AvatarImage } from '../ui/avatar';
import { DropdownMenu, DropdownMenuTrigger } from '../ui/dropdown-menu';

export default function UserDropdown() {
  return (
    <DropdownMenu>
      {/* Toggle user menu */}
      <DropdownMenuTrigger
        className="flex justify-end"
        render={
          <button>
            <Avatar className="size-10">
              <AvatarImage src="/user.svg" alt="User" />
            </Avatar>
          </button>
        }
      />
      {/* User menu */}
    </DropdownMenu>
  );
}
