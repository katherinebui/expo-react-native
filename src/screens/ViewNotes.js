import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, FAB } from 'react-native-paper'


function ViewNotes({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Ya momma so phat, she ain't got notes</Text>
      </View>
      <FAB
        style={styles.fab}
        small
        icon='plus'
        label='Add new note'
        onPress={() => navigation.navigate('AddNotes')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 20,
  },
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 10
  }
});

export default ViewNotes;
