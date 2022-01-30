import * as React from 'react';
import { StyleSheet, SafeAreaView, View, Text, Button, TextInput } from 'react-native';

const CharacterInfo = ({ navigation, route }) => {
  const [characterName, setCharacterName] = React.useState('');
  const [level, setLevel] = React.useState('');
  const [className, setClassName] = React.useState('');

  return (
    <SafeAreaView>
      <Text>캐릭터 이름</Text>
      <TextInput 
        style={styles.input}
        value={characterName}
        onChangeText={setCharacterName}>
      </TextInput>
      <Text>레벨</Text>
      <TextInput
        style={styles.input}
        value={level}
        onChangeText={setLevel}>
      </TextInput>
      <Text>직업</Text>
      <TextInput
        style={styles.input}
        value={className}
        onChangeText={setClassName}>
      </TextInput>
      <View>
        <View style={styles.fixToText}>
          <Button
            title="완료"
            onPress={
              () => navigation.navigate({
                name: 'Main', 
                params: {
                  characterName: characterName, 
                  level: level, 
                  className: className
                }
              })
            }
          />
          <Button
            title="취소"
            onPress={() => navigation.navigate('Main')}
          />
        </View>
    </View>
    </SafeAreaView>
  )
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

export default CharacterInfo;