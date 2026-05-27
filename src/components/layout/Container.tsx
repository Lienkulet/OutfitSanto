import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}
const Container = ({
  children,
  className = '',
}: ContainerProps) => {
  return (
    <div
      className={`
        mx-auto
        w-full
        max-w-360
        px-7
        max-[1100px]:px-6
        max-[700px]:px-5
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Container