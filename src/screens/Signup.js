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

export default Signup = ({ navigation }) => {
  const [txtEmail, setEmail] = useState('');
  const [txtPassword, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  const createAccount = () => {
    setLoading(true);
    auth
      .createUserWithEmailAndPassword(txtEmail, txtPassword)
      .then(result => {
        if (result) {
          alert(
            'Account has been created. You will be automatically logged in.'
          );
          navigation.goBack();
        }

        setLoading(false);
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
          onPress={createAccount}
          disabled={isLoading}
        >
          {!isLoading ? (
            <Text>Create Account</Text>
          ) : (
            <Spinner color="#eeeeee" />
          )}
        </Button>
        <Button
          transparent
          style={{
            marginTop: 20,
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onPress={() => navigation.goBack()}
          disabled={isLoading}
        >
          <Text>Back to Login</Text>
        </Button>
      </Content>
    </Container>
  );
};
