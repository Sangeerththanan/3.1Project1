import { StackActions } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { students } from './StudentsDb';

const TableView = ({ navigation }) => {
  const back = async () => {
    navigation.dispatch(StackActions.replace('Profile'));
  };

  const navigateToProfile = (newStudent) => {
    // Use navigation to navigate to the profile screen with the student details
    navigation.navigate('Profile', { newStudent });
  };

  const renderStudentItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToProfile(item)}>
      <View style={styles.tableRow}>
        <Text style={styles.tableCell}>{item.firstName}</Text>
        <Text style={styles.tableCell}>{item.lastName}</Text>
        <Text style={styles.tableCell}>{item.course}</Text>
        <Text style={styles.tableCell}>{item.address.country}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderCell}>First Name</Text>
        <Text style={styles.tableHeaderCell}>Last Name</Text>
        <Text style={styles.tableHeaderCell}>Course</Text>
        <Text style={styles.tableHeaderCell}>Country</Text>
        {/* Add more headers as needed */}
      </View>
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
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  tableHeaderCell: {
    flex: 1,
    color: '#ffffff',
    fontWeight: '700',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#3498db',
    padding: 10,
  },
  tableCell: {
    flex: 1,
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

export default TableView;
