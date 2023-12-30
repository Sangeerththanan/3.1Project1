import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const StudentProfile = (props) => {
    console.log(props.student);

    return (
        <View style={styles.outerDiv}>
            <View style={styles.leftDiv}>
                <Image style={styles.profile} source={{ uri: '../assets/profilepic/' + props.student.profilePic }} />
                <Text>ID: {props.student.studentId}</Text>
                <Text>Full Name: {props.student.firstName} {props.student.lastName}</Text>
                <Text>Age: {props.student.age}</Text>
                <Text>Course: {props.student.course}</Text>
                <Text>Gender: {props.student.gender}</Text>
                <Text>Address: {props.student.address.city} {props.student.address.country}</Text>
                <Text>Skills: {props.student.skills.join(', ')}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    outerDiv: {
        backgroundColor: '#49bbf3',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'auto',
        color: '#fff',
        padding: 5,
    },
    leftDiv: {
        backgroundColor: '#efefef',
        color: '#000',
        width: '48%',
    },
    rightDiv: {
        backgroundColor: '#efefef',
        color: '#000',
        width: '48%',
    },
    profile: {
        width: '75%',
        height: 200, // You may need to adjust the height based on your requirements
    },
});

export default StudentProfile;
