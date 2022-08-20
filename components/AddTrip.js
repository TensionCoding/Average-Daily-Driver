import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView } from 'react-native';

const AddTrip = ({handleFormSubmit, onPress}) => {
  const [date, onChangeDate] = React.useState("");
  const [time, onChangeTime] = React.useState("");
  const [odo, onChangeOdo] = React.useState("");
  const [start, onChangeStart] = React.useState("");

    return (
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.input} 
          placeholder="Enter The Date"
          onChangeText={onChangeDate}
          value={date}
        />
        <TextInput 
          style={styles.input}
          placeholder="Enter The Time" 
          onChangeText={onChangeTime}
          value={time} 
        />
        <TextInput
          style={styles.input}
          placeholder="Enter The Odometer" 
          onChangeText={onChangeOdo}
          value={odo}
        />
        <TextInput
          style={styles.input} 
          placeholder="Enter The Start Location" 
          onChangeText={onChangeStart}
          value={start} 
        />
        <Button 
        style={styles.button}
        onPress={() => {
          const payload = {
            date: date,
            time: time,
            odo: odo,
            start: start
          };
          console.log('payload',payload)
          handleFormSubmit(payload)
        }} 
        title={'ADD TRIP'}>
        </Button>
      </SafeAreaView>
    );
  }
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    paddingHorizontal: 10,

  },
  button:{
    paddingHorizontal: 10,
  },
    input: {
      backgroundColor: 'white',
      color: 'blue',
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
export default AddTrip;