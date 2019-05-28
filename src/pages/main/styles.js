import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  justifyContent: flex-start;
  alignItems: center;
`;

const Titulo = styled.Text`
  background-color: #fff;
  font-size: 24px;
`;
const Logo = styled.Image`
  width: 60%;
  margin: 0;
  position: absolute;
  padding: 0;
  z-index: 9999;
  top:0;
`;

export { Container, Titulo, Logo };