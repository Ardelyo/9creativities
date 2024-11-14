import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";

const ChatSkeleton = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-3 p-4"
    >
      <div className="flex items-start gap-2 max-w-[85%]">
        <Skeleton className="w-4 h-4 rounded-full flex-shrink-0" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
    </motion.div>
  );
};

export default ChatSkeleton;