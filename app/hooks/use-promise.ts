import { useEffect, useState, useRef } from 'react';

export default function usePromise(
  promiseOrFunction: () => any,
  defaultValue: any
) {
  const [state, setState] = useState({
    value: defaultValue,
    error: null,
    isPending: true,
  });
  const isSubscribed = useRef(true);

  useEffect(() => {
    const promise =
      typeof promiseOrFunction === 'function'
        ? promiseOrFunction()
        : promiseOrFunction;

    promise
      .then((value: any) =>
        isSubscribed ? setState({ value, error: null, isPending: false }) : null
      )
      .catch((error: any) =>
        isSubscribed
          ? setState({ value: defaultValue, error, isPending: false })
          : null
      );

    // eslint-disable-next-line no-return-assign
    return () => {
      isSubscribed.current = false;
    };
  }, [promiseOrFunction, defaultValue]);

  const { value, error, isPending } = state;
  return [value, error, isPending];
}
