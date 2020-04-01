import { useEffect, useState } from 'react';

const usePointer = () => {
  const [xy, setXY] = useState();

  useEffect(() => {
    const mouseMove = ({ clientX: x, clientY: y }) => {
      setXY({ x, y });
    };

    window.addEventListener(`mousemove`, mouseMove);
    return () => {
      window.removeEventListener(`mousemove`, mouseMove);
    };
  }, []);

  return { xy };
};

export default usePointer;
