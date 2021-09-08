import React from 'react';
import { Wrapper } from './SidebarMessage.styles';

import tangoMail from '../../images/mail-icon.svg';

const SidebarMessage = () => (
  <Wrapper>
    <div>
      <img src={tangoMail} alt='Email address for subscribing to our Newsletter' />
      <span>Mailing list</span>
    </div>
    <p>
      Do you want to get updated when we publish new stuff?
      <br />
      Just email us with your name and email adress
      <br />
      <br />
      <a href='mailto:mejlbox@yahoo.com'>Email</a>
    </p>
  </Wrapper>
);

export default SidebarMessage;
