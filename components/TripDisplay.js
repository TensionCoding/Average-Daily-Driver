import React, {Component} from 'react';
import {StyleSheet, Text, Button, ScrollView} from 'react-native';

export default class TripDisplay extends Component {
  constructor(props) {
    super(props);
    //this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    console.log('Trips Display mounted');
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* <View style={styles.view} > */}
        <Text style={styles.text}>Date: {this.props.date}</Text>
        <Text style={styles.text}>Time: {this.props.time}</Text>
        <Text style={styles.text}>Odometer: {this.props.odo}</Text>
        <Text style={styles.text}>Destination: {this.props.start}</Text>
        <Button
          onPress={() => this.props.handleDelete(this.props._id)}
          value={this.props._id}
          title={'Delete'}
        />
        {/* </View> */}
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
  view: {
    alignItems: 'center',
  },
  text: {
    paddingLeft: 10,
    color: 'white',
  },
});
