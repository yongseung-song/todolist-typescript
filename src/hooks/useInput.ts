import { ChangeEvent, useState } from 'react';

const useInput = (
  initialValue: string
): [string, (e: ChangeEvent<HTMLInputElement>) => void, () => void] => {
  const [state, setState] = useState(initialValue);

  const handler = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  const resetState = () => {
    setState(initialValue);
  };

  return [state, handler, resetState];
};

export default useInput;
