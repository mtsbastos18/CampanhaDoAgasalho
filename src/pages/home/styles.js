import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  justifyContent: flex-start;
  alignItems: center;

  backgroundColor: #F5F5F5;
`;

const Logo = styled.Image`
    width: 100%;
    margin: 0;
    position: relative;
    padding: 0;
`;

const Input = styled.TextInput`
  paddingHorizontal: 20px;
  paddingVertical: 15px;
  borderRadius: 5px;
  backgroundColor: #FFF;
  alignSelf: stretch;
  marginBottom: 15px;
  marginHorizontal: 20px;
  fontSize: 16px;
`;

const Button = styled.TouchableHighlight`
  padding: 20px;
  borderRadius: 5px;
  backgroundColor: #ff4500;
  alignSelf: stretch;
  margin: 15px;
  marginHorizontal: 20px;
`;

const ButtonText = styled.Text`
  color: #FFF;
  fontWeight: bold;
  fontSize: 16px;
  textAlign: center;
`;



export { Container, Logo, Input, Button, ButtonText,  };