import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text
 } from 'react-native';
 import fetch from 'node-fetch';
 import Unsplash from 'unsplash-js';

 import LargeImage from './LargeImage';
 import ElementOfList from './ElementOfList';

 global.fetch = fetch;

 const unsplash = new Unsplash({ accessKey: "ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9" });

export default class ImagesList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isWaitingForData : true,
      route : 'list',
      data : [],
      isLoading : true,
      pickedImage : ''
    }
  }

  onPressImage = (url, route) => {
    this.setState({
      route : route,
      pickedImage : url
    })
  }

  backToGalery = (route) => {
    this.setState({ route })
  }

  componentDidMount = () => {
    unsplash.search.photos("dogs", 1, 10, { orientation: "portrait" })
    .then(dogs => dogs.json())
    .then(dogs => {
      this.setState({data : dogs.results, isWaitingForData : false})
    });
  }

  dogsList = () => {
    if(!this.state.isWaitingForData){
      return this.state.data.map( (dog, i) => {
        return (
          <ElementOfList
            key={i}
            url={dog.urls.raw}
            name={dog.user.name}
            onPressImage={this.onPressImage}
          ></ElementOfList>
        )
      })
    }
  }

  render(){
    if(this.state.route === 'list'){
    return(
      <ScrollView>
        {
          this.dogsList()
        }
      </ScrollView>
    )}else{
      return(
      <View>
        <LargeImage backToGalery={this.backToGalery} url={this.state.pickedImage}/>
      </View>
    )}
  }
}
