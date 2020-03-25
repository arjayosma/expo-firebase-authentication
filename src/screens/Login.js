import React, { useState } from 'react';
import {
  Button,
  Container,
  Content,
  Form,
  Header,
  Input,
  Item,
  Label,
  Spinner,
  Text
} from 'native-base';

import { auth } from '../config/firebase';

export default Login = ({ navigation }) => {
  const [txtEmail, setEmail] = useState('');
  const [txtPassword, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  const signIn = () => {
    setLoading(true);
    auth
      .signInWithEmailAndPassword(txtEmail, txtPassword)
      .then(result => {
        if (result) {
          setLoading(false);
          navigation.navigate('HomeScreen');
        }
      })
      .catch(({ message }) => {
        alert(message);
        setLoading(false);
      });
  };
  return (
    <Container>
      <Header />
      <Content style={{ padding: 20 }}>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input value={txtEmail} onChangeText={setEmail} />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry
              value={txtPassword}
              onChangeText={setPassword}
            />
          </Item>
        </Form>
        <Button
          style={{
            marginTop: 20,
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onPress={signIn}
          disabled={isLoading}
        >
          {!isLoading ? <Text>Login</Text> : <Spinner color="#eeeeee" />}
        </Button>
        <Button
          transparent
          style={{
            marginTop: 20,
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onPress={() => navigation.navigate('SignupScreen')}
          disabled={isLoading}
        >
          <Text>Signup</Text>
        </Button>
      </Content>
    </Container>
  );
};
