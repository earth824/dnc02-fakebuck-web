import { Button } from '../ui/button';
import { Calendar } from '../ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

export default function DatePickerInput() {
  return (
    <Popover>
      <PopoverTrigger
        className="justify-start font-normal"
        render={
          <Button variant="outline">
            <span className="text-muted-foreground">Select date</span>
          </Button>
        }
      />
      <PopoverContent className="w-auto p-1" align="start">
        <Calendar mode="single" captionLayout="dropdown" />
      </PopoverContent>
    </Popover>
  );
}
