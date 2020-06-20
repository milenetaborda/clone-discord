import React from  'react';

import { Container, Profile, Avatar, UserData, Icons, MicInfo, HeadphoneIcon, SettingsIcon} from './styles';

const UserInfo: React.FC = () => {
  return( 
     <Container>
       <Profile>
        <Avatar />
        <UserData >
          <strong>Milene Taborda</strong>
          <span>#8897</span>
        </UserData>
       </Profile>

       <Icons>
         <MicInfo />
         <HeadphoneIcon />
         <SettingsIcon />
       </Icons>
     </Container>
  )
};

export default UserInfo;