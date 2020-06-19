import React from  'react';

import { Container, Category, AddCategoryIcon} from './styles';

import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () => {
  return( 
     <Container>
       <Category>
         <span>Canais de texto</span>
         <AddCategoryIcon />
       </Category>

       <ChannelButton channelName="chat-livre" />
       <ChannelButton channelName="trabalho" />
       <ChannelButton channelName="csgo" />
       <ChannelButton channelName="counter_strike_1.6" />
       <ChannelButton channelName="valorant" />
     
     </Container>
  )
};

export default ChannelList;