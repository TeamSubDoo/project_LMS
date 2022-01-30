import * as React from 'react';
import { StyleSheet, StatusBar, FlatList, SafeAreaView, View, Text, Button } from 'react-native';

const CharacterList = ({params}) => {
  const Item = ({ characterName, level, className }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{characterName}</Text>
      <Text style={styles.title}>{level}</Text>
      <Text style={styles.title}>{className}</Text>
    </View>
  );
  
  const renderItem = ({ item }) => {
    <Item 
      characterName={item.characterName}  
      level={item.level}
      className={item.className}
    />
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={params}
        renderItem={renderItem}
        keyExtractor={item => item.characterName}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 10,
  },
});

export default CharacterList;