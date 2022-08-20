import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GooglePlacesInput = () => {
  return (
      <View style={styles.container}>
    <GooglePlacesAutocomplete
      apiKey='AIzaSyCIDXTF_fPc_MKnDumTvso0EIiU8n-Y9fs'
      placeholder='Search'
      minLength={2}
      fetchDetails={true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      style={styles.inputStyle}
      query={{
        key: 'AIzaSyCIDXTF_fPc_MKnDumTvso0EIiU8n-Y9fs',
        language: 'en',
      }}
      currentLocation={false}
    />
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputStyle: {
      paddingVertical: 16,
      paddingHorizontal: 16,
      backgroundColor: '#cfcfcf',
      borderRadius: 20,
      color: 'black',
      fontSize: 16
    }
  })
export default GooglePlacesInput;