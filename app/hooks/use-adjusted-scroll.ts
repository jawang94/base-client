import { RefObject, useCallback, useState } from 'react';

const useAdjustedScroll = (ref: RefObject<HTMLElement>): VoidFunction => {
  const [previousScroll, setPreviousScroll] = useState<{
    top: number;
    height: number;
  }>();

  /**
   * Scrolls to the previous position or completely to bottom (on demand)
   */
  const adjust = useCallback(
    (scrollToBottom?: boolean) => {
      if (!ref.current) return;

      const node = ref.current as HTMLElement;
      const height =
        !scrollToBottom && previousScroll
          ? previousScroll.height
          : node.clientHeight;

      node.scrollTop = node.scrollHeight - height;

      // saves current scroll details
      if (previousScroll && node.scrollTop !== previousScroll.top) {
        setPreviousScroll({
          top: node.scrollTop,
          height: node.scrollHeight,
        });
      }
    },
    [ref, previousScroll]
  );

  return adjust;
};

export default useAdjustedScroll;
