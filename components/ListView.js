import { StackActions } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { students } from './StudentsDb';

const ListView = ({ navigation }) => {
  const back = async () => {
    navigation.dispatch(StackActions.replace('Profile'));
  };

  const navigateToProfile = (newStudent) => {
    // Use navigation to navigate to the profile screen with the student details
    navigation.navigate('Profile', { newStudent });
  };

  const renderStudentItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToProfile(item)}>
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>{`${item.firstName} ${item.lastName}`}</Text>
        <Text style={styles.listItemText}>{item.course}</Text>
        <Text style={styles.listItemText}>{item.address.country}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={students}
        keyExtractor={(item) => item.studentId.toString()}
        renderItem={renderStudentItem}
      />
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText} onPress={back}>
            Back
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  listItem: {
    borderBottomWidth: 1,
    borderColor: '#3498db',
    padding: 10,
  },
  listItemText: {
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '700',
  },
});

export default ListView;
