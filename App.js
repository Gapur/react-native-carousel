import React, {useRef, useState} from 'react';
import {StyleSheet, Animated, View, Text} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {getStatusBarHeight} from 'react-native-status-bar-height';

import {
  colors,
  carouselData,
  SCREEN_WIDTH,
  CAROUSEL_ITEM_WIDTH,
} from './constants';

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderBackground = useRef(new Animated.Value(0)).current;

  const handleBackgroundChange = (slideIndex) => {
    Animated.spring(sliderBackground, {
      toValue: slideIndex,
    }).start();
  };

  const renderItem = ({item}) => (
    <View style={styles.snapCarouselItem}>
      <View style={styles.carouselItemTitle}>
        {item.renderIcon()}
        <Text style={styles.carouselItemTitleText}>{item.title}</Text>
      </View>
      <Text style={styles.descriptionText}>{item.description}</Text>
    </View>
  );

  const renderPagination = () => (
    <Pagination
      dotsLength={carouselData.length}
      activeDotIndex={activeSlide}
      dotStyle={styles.dotStyle}
      containerStyle={styles.paginationContainer}
    />
  );

  const bgColor = sliderBackground.interpolate({
    inputRange: carouselData.map((_, ind) => ind),
    outputRange: carouselData.map((item) => item.bgColor),
  });

  const carouselStyle = {
    ...styles.snapCarousel,
    backgroundColor: bgColor,
  };

  return (
    <View>
      <Animated.View style={carouselStyle}>
        <Text style={styles.titleText}>React Native Carousel</Text>
        <View style={styles.carouselWrapper}>
          <Carousel
            data={carouselData}
            renderItem={renderItem}
            onSnapToItem={(index) => setActiveSlide(index)}
            onScrollIndexChanged={handleBackgroundChange}
            sliderWidth={SCREEN_WIDTH}
            itemWidth={CAROUSEL_ITEM_WIDTH}
          />
        </View>
        {renderPagination()}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  snapCarousel: {
    backgroundColor: colors.kellyGreen,
    paddingBottom: 16,
    paddingTop: 8 + getStatusBarHeight(),
  },
  descriptionText: {
    color: colors.biscay,
    fontSize: 16,
    paddingVertical: 16,
  },
  titleText: {
    paddingHorizontal: 16,
    paddingBottom: 12,
    color: colors.white,
    fontWeight: '900',
    fontSize: 18,
  },
  snapCarouselItem: {
    height: 154,
    borderWidth: 1,
    borderColor: colors.greyBlue,
    borderRadius: 5,
    backgroundColor: colors.white,
    padding: 16,
  },
  carouselItemTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  carouselItemTitleText: {
    fontSize: 18,
    color: colors.sapphire,
    fontWeight: '600',
    marginLeft: 12,
  },
  paginationContainer: {
    paddingVertical: 4,
  },
  dotStyle: {
    backgroundColor: colors.white,
  },
});

export default App;
