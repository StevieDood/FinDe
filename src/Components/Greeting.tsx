import React from 'react';
import { Divider } from 'antd';
import styled from 'styled-components';
import {
  GROOM_NAME,
  GROOM_FATHER_NAME,
  GROOM_MOTHER_NAME,
  BRIDE_NAME,
  BRIDE_FATHER_NAME,
  BRIDE_MOTHER_NAME,
} from '../Config';
import GroovePaper from '../Assets/GroovePaper.png';

const Wrapper = styled.div`
  background: #efebe9;
  background-image: url(${GroovePaper});
  padding-top: 42px;
  padding-left: 42px;
  padding-right: 42px;
  width: 100%;
`;

const Title = styled.p`
  font-size: 2vh;
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const Content = styled.p`
  font-size: 1.75vh;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 16px;
  width: 100%;
  text-align: center;
`;

const GroomBride = styled.p`
  font-size: 1.75vh;
  line-height: 1.75;
  opacity: 0.85;
  margin-bottom: 0px;
  width: 100%;
  text-align: center;
`;

const Gretting = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>Queridos amigos:</Title>
      </Divider>
      <Content>
      El espíritu navideño está en el aire y queremos compartir la alegría de la temporada contigo.
        <br />
        En esta época tan especial del año, nos gustaría invitarte a una cena navideña llena de risas, buena compañía y deliciosos sabores. 
        <br />
        Únete a nosotros para celebrar la magia de la Navidad en una velada llena de calidez y amistad.
        <br />
        ¡Esperamos que puedas acompañarnos y hacer de esta noche un recuerdo inolvidable!
      </Content>
      <GroomBride>
        Sarah Fuentes - Anfitriona
        <br />
        Steve Medel - Anfitrión
      </GroomBride>
    </Wrapper>
  );
};

export default Gretting;
