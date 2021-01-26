import { useEffect } from 'react';

/**
 * Hook that executes a provided array of actions upon clicking outside of the passed ref
 */

const useClickOutside = ({
  ref,
  actions,
}: {
  ref: React.MutableRefObject<any>;
  actions: Function[];
}) => {
  useEffect(() => {
    /**
     * Execute methods if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        event.stopPropagation();
        actions.map((action) => action());
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, actions]);
};

export default useClickOutside;
