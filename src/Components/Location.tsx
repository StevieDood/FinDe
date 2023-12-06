import React from 'react';
import { Divider } from 'antd';
import styled from 'styled-components';
import GroovePaper from '../Assets/GroovePaper.png';
import LocationMap from '../Assets/LocationMap.png';

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

const Image = styled.img`
  width: 75%;
  max-width: 1024px;
`;

const Location = () => {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>Ubicación</Title>
      </Divider>
      <a href="https://www.google.com/maps/place/C.+Xochimilcas+63,+Tezozomoc,+Azcapotzalco,+02459+Ciudad+de+M%C3%A9xico,+CDMX/@19.4891838,-99.2000371,17z/data=!3m1!4b1!4m6!3m5!1s0x85d2029b32bdb0c1:0x658456c100bdfa15!8m2!3d19.4891788!4d-99.1974622!16s%2Fg%2F11sxx5cl59?entry=ttu">
      <Image src={LocationMap} />
      </a>
    </Wrapper>
  );
};

export default Location;
