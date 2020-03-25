import React, { useEffect } from 'react';
import { Container, Spinner, Text, View } from 'native-base';

import { auth } from '../config/firebase';

export default Authentication = ({ navigation }) => {
  useEffect(() => {
    auth.onAuthStateChanged(currentUser => {
      if (currentUser) {
        navigation.navigate('HomeScreen');
      } else {
        navigation.navigate('LoginScreen');
      }
    });
  }, []);
  return (
    <Container>
      <View
        style={{
          padding: 20,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text>Authenticating</Text>
        <Spinner color="#333333" />
      </View>
    </Container>
  );
};
