import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import db from '../config'


export default class ClassDetails extends Component {
  constructor(){
    super()
    this.state={
      time:'',
      date:'',
      meet_link:'',
      student_name:''
    }
  }
  
  render(){
    return (
      <View>
        <Card>
        <Text>Class Details</Text>
        </Card>
      </View>
    )
  }
  
}

