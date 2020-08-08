import React from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native'

import Detail from './Detail'

export const Carousel = (props) => {

    const { items, style } = props;
    const itemsPerInterval = props.itemsPerInterval === undefined
      ? 1
      : props.itemsPerInterval;
  
    const [interval, setInterval] = React.useState(1);
    const [intervals, setIntervals] = React.useState(1);
    const [width, setWidth] = React.useState(0);
  
    const init = (width) => {
      // initialise width
      setWidth(width);
      // initialise total intervals
      const totalItems = items.length;
      setIntervals(Math.ceil(totalItems / itemsPerInterval));
    }
  
    const getInterval = (offset) => {
      for (let i = 1; i <= intervals; i++) {
        if (offset < (width / intervals) * i) {
          return i;
        }
        if (i == intervals) {
          return i;
        }
      }
    }
  
    /* let bullets = [];
    for (let i = 1; i <= intervals; i++) {
      bullets.push(
        <Text
          key={i}
          style={{
            ...styles.bullet,
            opacity: interval === i ? 0.5 : 0.1
          }}
        >
          &bull;
        </Text>
      );
    } */
  
    return (
      <View >
        <ScrollView
            horizontal={true}
            contentContainerStyle={{ width: `${100 * intervals}%` }}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={200}
            decelerationRate="fast"
            pagingEnabled>

            <Detail />

        </ScrollView>

        
        {/* <View style={styles.bullets}>
          {bullets}
        </View> */}
      </View>
    )
  }

  export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#fbfbfb',
        borderColor: '#ebebeb',
        borderWidth: 1,
        borderRadius: 8,
        shadowColor: '#fcfcfc',
        shadowOpacity: 1,
        marginTop: 10,
        shadowOffset: {
          width: 0,
          height: 5
        },
      },
  });
  
  export default Carousel;