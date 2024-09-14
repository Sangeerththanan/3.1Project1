import React, { useState, useEffect } from 'react';
import { students } from './StudentsDb'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { StackActions } from '@react-navigation/native';

const StudentsFilter = ({ navigation, route }) => {
  const table = async () => {
    navigation.dispatch(
      StackActions.replace('Table')
    );
  };

  const list = async () => {
    navigation.dispatch(
      StackActions.replace('List')
    );
  };

  // Set default student as the first in the list
  const [student, setStudent] = useState(students[0]);

  // Safely check if route and route.params exist, then extract newStudent
  const newStudent = route?.params?.newStudent;

  useEffect(() => {
    if (newStudent) {
      console.log(newStudent);
      setStudent(newStudent);
    }
  }, [newStudent]);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Students Information Portal</Text>
      <Image
        source={require(`../assets/profilepic/1.jpg`)}
        alt="Profile"
        style={styles.profile}
      />

      <View style={styles.studentInfo}>
        <Text style={styles.infoText}>ID: {student.studentId}</Text>
        <Text style={styles.infoText}>Full Name: {student.lastName + ' ' + student.firstName}</Text>
        <Text style={styles.infoText}>Age: {student.age}</Text>
        <Text style={styles.infoText}>Course: {student.course}</Text>
        <Text style={styles.infoText}>Gender: {student.gender}</Text>
        <Text style={styles.infoText}>Address: {student.address.city + ' ' + student.address.country}</Text>
        <Text style={styles.infoText}>Skills: {student.skills}</Text>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text
            style={styles.buttonText}
            onPress={table}
          >TableView</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonContainer, styles.rightButton]}>
          <Text
            style={styles.buttonText}
            onPress={list}
          >ListView</Text>
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
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    margin: 5,
    flex: 1,
  },
  buttonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '700',
  },
  rightButton: {
    marginLeft: 5,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  profile: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginTop: 20,
  },
  studentInfo: {
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#ecf0f1',
    borderRadius: 8,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#2c3e50',
  },
});

export default StudentsFilter;
