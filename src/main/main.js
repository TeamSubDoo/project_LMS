import * as React from 'react';
import { StyleSheet, SafeAreaView, Button } from 'react-native';

import CharacterList from '../character/list';

const Main = ({ navigation, route }) => {
  const characterInfos = [];
  characterInfos.push(route.params || { characterName: '', className: '', level: ''});

  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  return (
    <SafeAreaView style={styles.container}>
      <CharacterList params={characterInfos} />
      <Button 
        title='+' 
        onPress={() => navigation.navigate('CharacterInfo')} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Main;