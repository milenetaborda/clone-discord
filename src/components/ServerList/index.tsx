import React from 'react';

import ServerButton from '../SeverButton'

import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
  return(
    <Container>
      <ServerButton isHome />
      <Separator />
        
      <ServerButton />
      <ServerButton  hasNotifications />
      <ServerButton mentions={3}/>
      <ServerButton />
      <ServerButton />
      <ServerButton  hasNotifications />
      <ServerButton />
      <ServerButton mentions={13}/>
    </Container>
  )
};

export default ServerList;