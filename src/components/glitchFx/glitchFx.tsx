import React from 'react';

interface GlitchFxProps {
  children?: React.ReactNode;
}

export function GlitchFx({ children }: GlitchFxProps) {
  return (
    <div>
      {children}
    </div>
  );
}