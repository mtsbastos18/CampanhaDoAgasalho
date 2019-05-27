import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  alignItems: center;
`;

const Titulo = styled.Text`
  background-color: #fff;
  font-size: 24px;
`;
const Logo = styled.Image`
  width: 50%;
  z-index: 9999;
  position:absolute;
  top:-130;
  margin: 0;
  padding: 0;
`;

export { Container, Titulo, Logo};