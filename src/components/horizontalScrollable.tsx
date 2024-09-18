import React, { ReactNode } from 'react';

interface HorizontalScrollProps {
  children: ReactNode;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ children }) => {
  return (
    <div className="w-full overflow-x-auto hide-scrollbar px-10">
      <div className="flex space-x-4 py-4">
        {children}
      </div>
    </div>
  );
};

export default HorizontalScroll;
