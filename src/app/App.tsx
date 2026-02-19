import { Suspense, useCallback, useState } from 'react';

import cls from './Test.module.css';
import './styles/App.css';
import './styles/reset.css';

export const App = () => {
  const [count, setCount] = useState(1);
  const handleCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <Suspense fallback="Loading...">
      <h1>{count}</h1>
      <button className={cls.test} onClick={handleCount}>
        click
      </button>
    </Suspense>
  );
};
