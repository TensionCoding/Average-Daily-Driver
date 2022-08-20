import React, { Component } from "react";
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

export default class TripDisplay extends Component {
  constructor(props){
    super(props);
    //this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
      console.log('Trips Display mounted');
  }


  render(){
    return(
    <ScrollView>
      <Text>{this.props.date}</Text>
      <Text>{this.props.time}</Text>
      <Text>{this.props.odo}</Text>
      <Text>{this.props.start}</Text>
      <Text>{this.props._id}</Text>
      <Button onPress={text => this.props.handleDelete(this.props._id)} value={this.props._id} title={'Delete'}/>
    </ScrollView>
    );
  }
}