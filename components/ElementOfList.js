import React, {Component} from 'react';
import {
  Text,
  Image,
  View,
  Button
 } from 'react-native';

export default class ElementOfList extends Component{

  render(){
    return(
      <View style={{ alignSelf: "center"}}>
        <Text
          style={{color: 'black',
              textAlign: 'center',
          fontSize: 20,}}
        >{this.props.name}</Text>
        <Image
          source={{uri : this.props.url}}
          style={{width : 250, height : 250}}

        />
        <Button onPress={() => this.props.onPressImage( this.props.url, 'largepage')} title='Open'>\</Button>
      </View>
    )
  }
}
