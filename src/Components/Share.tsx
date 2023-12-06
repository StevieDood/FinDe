import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Button, Divider, message } from 'antd';
import { WhatsAppOutlined , LinkOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import {
  KAKAOTALK_API_TOKEN,
  KAKAOTALK_SHARE_IMAGE,
  WEDDING_INVITATION_URL,
  GROOM_NAME,
  BRIDE_NAME,
} from '../Config';
import GroovePaper from '../Assets/GroovePaper.png';

declare global {
  interface Window {
    Kakao: any;
  }
}

const Wrapper = styled.div`
  background: #efebe9;
  background-image: url(${GroovePaper});
  padding-left: 42px;
  padding-right: 42px;
  padding-bottom: 42px;
  width: 100%;
  text-align: center;
`;

const Title = styled.p`
  font-size: 2vh;
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const KakaoTalkShareButton = styled(Button)`
  background: #25D366;
  border-color: #25D366;
  color: #181600;
  &:hover {
    background-color: #fcf07e !important;
    border-color: #fcf07e !important;
    color: #17160b !important;
  }
  &:focus {
    background-color: #fcf07e !important;
    border-color: #fcf07e !important;
    color: #17160b !important;
  }
`;

const LinkShareButton = styled(Button)`
  background: #53acee;
  border-color: #53acee;
  color: #ffffff;
  &:hover {
    background-color: #9fcbed !important;
    border-color: #9fcbed !important;
    color: #ffffff !important;
  }
  &:focus {
    background-color: #9fcbed !important;
    border-color: #9fcbed !important;
    color: #ffffff !important;
  }
`;

const Share = () => {
  const [shareCount, setShareCount] = React.useState<number>(0);

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>Xochimilcas 63, Colonia Tezozomoc,<br/> Azcapotzalco. Cp 02459</Title>
      </Divider>
      <a href='https://chat.whatsapp.com/G7olot9tXEWIg7cqJRid9P'>
      <KakaoTalkShareButton
        style={{ margin: 8 }}
        icon={<WhatsAppOutlined />}
        size="large"
        onClick={() => setShareCount(shareCount + 1)}
      >
       Whatsapp Aquí ;D
      </KakaoTalkShareButton>
      </a>
      
    </Wrapper>
  );
};

export default Share;
