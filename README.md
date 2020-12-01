<p align="center">
  <img width="700"src="https://github.com/Gapur/react-native-carousel/blob/master/assets/example.gif">
</p>

# React Native Carousel

How to Build React Native Carousel

Make Responsive Horizontal Carousel

Carousel is a dynamic scrolling list of elements in horizontal order, where the previous and next elements are partially visible.

## Installation

Install the repository:
```sh
git clone https://github.com/Gapur/react-native-carousel.git
```

After that, move it into the react_native_carousel directory and run it from the terminal:
```sh
cd react_native_carousel
npm run ios
```

## Make Carousel

I am going to use [react-native-snap-carousel](https://github.com/archriss/react-native-snap-carousel) lib to make horizontal responsive carousel. You can install it with the following command:

```sh
npm install --save react-native-snap-carousel
```

Let’s define constants for our carousel:
```js
/ carousel slider width
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const CAROUSEL_VERTICAL_OUTPUT = 56;
export const CAROUSEL_ITEM_WIDTH = SCREEN_WIDTH - CAROUSEL_VERTICAL_OUTPUT;
```

We will code two main functions renderItem and renderPagination.
```js
function App() {
  const [activeSlide, setActiveSlide] = useState(0); // current active slide card
 
  const renderItem = ({item}) => ( // render every carousel content
    <View style={styles.snapCarouselItem}>
      <View style={styles.carouselItemTitle}>
        {item.renderIcon()}
        <Text style={styles.carouselItemTitleText}>{item.title}</Text>
      </View>
      <Text style={styles.descriptionText}>{item.description}</Text>
    </View>
  );

  const renderPagination = () => ( // render carousel pagination
    <Pagination
      dotsLength={carouselData.length}
      activeDotIndex={activeSlide}
      dotStyle={styles.dotStyle}
      containerStyle={styles.paginationContainer}
    />
  );

  return (
    <View style={styles.screen}>
      <View style={styles.snapCarousel}>
        <Text style={styles.titleText}>React Native Carousel</Text>
        <View style={styles.carouselWrapper}>
          <Carousel
            data={carouselData}
            renderItem={renderItem}
            onSnapToItem={(index) => setActiveSlide(index)} // we will update active slide index
            sliderWidth={SCREEN_WIDTH}
            itemWidth={CAROUSEL_ITEM_WIDTH}
          />
        </View>
        {renderPagination()}
      </View>
    </View>
  );
}
```

## Animations

React Native provides Animated API for animations. Animated API focuses on declarative relationships between inputs and outputs, with configurable transforms in between, and start/stop methods to control time-based animation execution.

We are going to animate our app with Animated.spring. It tracks the velocity state to create fluid motions as the toValue updates. We will change backgroundColor when carousel slide changes.

```js
const sliderBackground = useRef(new Animated.Value(0)).current;

const handleBackgroundChange = (slideIndex) => {
  Animated.spring(sliderBackground, {
    toValue: slideIndex,
    useNativeDriver: false,
  }).start();
};

// renderItem ...
// renderPagination ...

const bgColor = sliderBackground.interpolate({
  inputRange: carouselData.map((_, ind) => ind),
  outputRange: carouselData.map((item) => item.bgColor),
});

const carouselStyle = {
  ...styles.snapCarousel,
  backgroundColor: bgColor,
};

return (
  <View style={styles.screen}>
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
```

Above, we use useRef to persist Animated value. useRef returns a mutable ref object whose .current property is initialized to the passed argument.

## Article on Medium

[React Native Carousel](https://medium.com/javascript-in-plain-english/react-native-carousel-4df6db1c3303)

## How to contribute?

1. Fork this repo
2. Clone your fork
3. Code 🤓
4. Test your changes
5. Submit a PR!
