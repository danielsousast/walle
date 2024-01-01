import React from 'react';

import {
  DefaultContainer,
  DefaultContent,
  Header,
} from '~/presentation/components';

interface ScreenProps {
  title?: string;
  children: React.ReactNode;
}

export const Screen = ({children, title}: ScreenProps) => {
  return (
    <DefaultContainer invert>
      {!!title && <Header title={title} />}

      <DefaultContent paddingTop={20}>{children}</DefaultContent>
    </DefaultContainer>
  );
};
