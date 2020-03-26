import React, {Component} from 'react';
import {
  Image,
  View,
  Button
 } from 'react-native';

export default class LargeImage extends Component{

  render(){
    return(
      <View >
        <Image
          source={{uri : this.props.url}}
          style={{width : '100%', height : '94.6%'}}
        />
        <Button
          title="Back to galery"
          onPress={() => this.props.backToGalery('list')}
        ></Button>
      </View>
    )
  }
}
