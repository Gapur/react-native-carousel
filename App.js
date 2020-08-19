import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Animated,
  View,
  Text,
  Dimensions,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import {colors, carouselData} from './constants';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const CAROUSEL_VERTICAL_OUTPUT = 56;
export const CAROUSEL_ITEM_WIDTH = SCREEN_WIDTH - CAROUSEL_VERTICAL_OUTPUT;

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderBackground = useRef(new Animated.Value(0)).current;

  const handleBackgroundChange = (slideIndex) => {
    Animated.spring(sliderBackground, {
      toValue: slideIndex,
    }).start();
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.snapCarouselItem}>
        <View style={styles.carouselItemTitle}>
          {item.renderIcon()}
          <Text style={styles.carouselItemTitleText}>{item.title}</Text>
        </View>
        <Text style={styles.descriptionText}>{item.description}</Text>
      </View>
    );
  };

  const renderPagination = () => {
    return (
      <Pagination
        dotsLength={carouselData.length}
        activeDotIndex={activeSlide}
        dotStyle={styles.dotStyle}
        containerStyle={styles.paginationContainer}
      />
    );
  };

  const bgColor = sliderBackground.interpolate({
    inputRange: carouselData.map((_, ind) => ind),
    outputRange: carouselData.map((item) => item.bgColor),
  });
  const carouselStyle = {
    ...styles.snapCarousel,
    backgroundColor: bgColor,
  };

  return (
    <SafeAreaView>
      <Animated.View style={carouselStyle}>
        <Text style={styles.dashboardTitle}>React Native Carousel</Text>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  snapCarousel: {
    backgroundColor: colors.kellyGreen,
    paddingBottom: 16,
    paddingTop: 16,
  },
  descriptionText: {
    color: colors.biscay,
    fontSize: 16,
    paddingVertical: 16,
  },
  actionPanel: {
    flexDirection: 'row',
  },
  dashboardTitle: {
    paddingHorizontal: 16,
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
    fontWeight: 'bold',
    marginLeft: 12,
  },
  carouselItemImage: {
    height: 120,
    width: 180,
  },
  paginationContainer: {
    paddingVertical: 4,
  },
  dotStyle: {
    backgroundColor: colors.white,
  },
});

export default App;
