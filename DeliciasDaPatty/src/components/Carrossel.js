import React, { Component } from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import SideSwipe from 'react-native-sideswipe';

import Detail from './Detail';

const CAROUSELITEM = [
  {id: 1, card: <Detail screenName='Detail' />},
  {id: 2, card: <Detail screenName='Detail' />},
  {id: 3, card: <Detail screenName='Detail' />},
  {id: 4, card: <Detail screenName='Detail' />}
];

const SLIDER_1_FIRST_ITEM = 1;

const renderItem = ({ item }) => {
  return (
      <View style={{ width: '100%', height: '100%', padding: 10 }}>
          {item.card}
      </View>
  );
}


class Carrossel extends Component {
  constructor (props) {
    super(props);
    this.state = {
        slider1ActiveSlide: SLIDER_1_FIRST_ITEM
    };
  }

  render () {
    const { slider1ActiveSlide } = this.state;
    return (
      <View>
          <Carousel
            data={CAROUSELITEM}
            renderItem={renderItem}
            sliderWidth={360}
            itemWidth={360}
        />
      </View>
        
    );
  }
};

export default Carrossel;