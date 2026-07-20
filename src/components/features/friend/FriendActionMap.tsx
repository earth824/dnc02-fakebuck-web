import { RelationshipStatus } from '@/lib/api/api.type';
import { ActionButtonProps } from './ActionButton';
import { Check, Plus, Trash2 } from 'lucide-react';
import {
  acceptRequestAction,
  cancelRequestAction,
  rejectRequestAction,
  sendRequestAction,
  unfriendAction
} from '@/lib/actions/friend.action';

export const FRIEND_ACTION_MAP: Record<
  Exclude<RelationshipStatus, 'SELF'>,
  Partial<Record<'confirm' | 'cancel', Omit<ActionButtonProps, 'targetUserId'>>>
> = {
  FRIEND: {
    cancel: {
      variant: 'destructive',
      children: (
        <>
          <Trash2 /> Unfriend
        </>
      ),
      onClickAction: unfriendAction
    }
  },
  REQUEST_RECIEVED: {
    confirm: {
      variant: 'default',
      children: (
        <>
          <Check /> Confirm
        </>
      ),
      onClickAction: acceptRequestAction
    },
    cancel: {
      variant: 'outline',
      children: (
        <>
          <Trash2 /> Delete
        </>
      ),
      onClickAction: rejectRequestAction
    }
  },
  REQUEST_SENT: {
    cancel: {
      variant: 'outline',
      children: (
        <>
          <Trash2 /> Cancel request
        </>
      ),
      onClickAction: cancelRequestAction
    }
  },
  NONE: {
    confirm: {
      variant: 'default',
      children: (
        <>
          <Plus /> Add friend
        </>
      ),
      onClickAction: sendRequestAction
    }
  }
};
