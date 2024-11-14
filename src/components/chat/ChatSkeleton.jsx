import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";

const ChatSkeleton = () => {
  return (
    <div className="space-y-4 p-4">
      <div className="flex items-start gap-3">
        <Skeleton className="w-8 h-8 rounded-full" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
      <div className="flex items-start gap-3 justify-end">
        <div className="space-y-2 flex-1">
          <Skeleton className="h-4 w-2/3 ml-auto" />
          <Skeleton className="h-4 w-1/2 ml-auto" />
        </div>
        <Skeleton className="w-8 h-8 rounded-full" />
      </div>
    </div>
  );
};

export default ChatSkeleton;