import { useEffect, useRef, useState } from 'react';

const usePointer = () => {
  const containerRef = useRef();
  const [xy, setXY] = useState();

  useEffect(() => {
    const mouseMove = ({ clientX: x, clientY: y }) => {
      setXY({ x, y });
    };

    containerRef.current.addEventListener(`mousemove`, mouseMove);
    const ref = containerRef.current;
    return () => {
      ref.removeEventListener(`mousemove`, mouseMove);
    };
  }, [containerRef]);

  return { xy, containerRef };
};

export default usePointer;
