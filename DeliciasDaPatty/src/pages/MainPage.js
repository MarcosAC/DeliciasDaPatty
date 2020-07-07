import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

class MainPage extends Component {
  render () {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.viewImage}>
          <Image source={require('../../assets/imgs/img_bolo.jpg')} style={ {height: 300, width: 250, borderRadius: 15} } />
          {/*<Text>Delicias da Patti :D</Text>*/}
        </View>
      </ScrollView>
      
    );
  }

}

const styles = StyleSheet.create({
  viewImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 250,
    borderRadius: 15
  }
});

export default MainPage;