import React from  'react';

import { Container, HashtahIcon, Title, Separator, Description } from './styles';

const ChannelInfo: React.FC = () => {
  return( 
     <Container>
       <HashtahIcon />

       <Title>chat-livre</Title>

       <Separator />

       <Description>Canal aberto para conversas</Description>
     </Container>
  )
};

export default ChannelInfo;