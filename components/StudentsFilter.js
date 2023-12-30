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
  const [student, setStudent] = useState(students[0]);
  const { newStudent } = route.params;
  
  // useEffect to update the student details when route.params changes
  useEffect(() => {
    if (newStudent) {
      console.log(newStudent)
      setStudent(newStudent);
      // Update other state variables if needed
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
    // justifyContent: 'flex-end', // Align students to the bottom
    padding: 16,
  },
  buttonRow: {
    flexDirection: 'row', // Arrange children in a row
    justifyContent: 'space-between', // Space evenly between children
  },
  buttonContainer: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    margin: 5,
    flex: 1, // Equal flex for both buttons
  },
  buttonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '700',
  },
  rightButton: {
    marginLeft: 5, // Adjust margin to create space between buttons
  },
  headerText: {
    fontSize: 24, // You can adjust the font size as needed
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  profile: {
    width: 150, // Adjust the width as needed
    height: 150, // Adjust the height as needed
    borderRadius: 75, // To make it a circular profile picture
    alignSelf: 'center', // Center the image horizontally
    marginTop: 20, // Add margin from the top
  },
  studentInfo: {
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#ecf0f1', // Light background color
    borderRadius: 8,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#2c3e50', // Text color
  },
});

export default StudentsFilter;