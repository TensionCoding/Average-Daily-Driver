import React from "react";
import {View, Text, TextInput, StyleSheet} from 'react-native';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
      <View style={styles.container}>
        <TextInput
          value={value}
          onChangeText={setValue}
          style={styles.input} 
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}/>
      </View>
  )
};

const styles = StyleSheet.create({
    container: {
        color: 'black',
        backgroundColor: 'white',
        width: '100%',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    input: {

    }

})
export default CustomInput;