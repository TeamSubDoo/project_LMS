import * as React from 'react';
import { StyleSheet, View, SafeAreaView, TextInput, Button } from 'react-native';

const Login = ({ navigation }) => {

  return (
    <SafeAreaView>
      <TextInput 
        style={styles.input}>
      </TextInput>
      <TextInput
        style={styles.input}
        secureTextEntry="true">
      </TextInput>
      <View>
        <View style={styles.fixToText}>
          <Button
            title="로그인"
            onPress={() => navigation.navigate('Main')}
          />
          <Button
            title="비밀번호 찾기"
            onPress={() => navigation.navigate('Main')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Login;