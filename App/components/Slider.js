import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Text,
} from 'react-native';
import AppText from './AppText';
import style from '../config/style';

const {width} = Dimensions.get('window');

function Slider({style, sliderData}) {
  const [active, setActive] = useState(0);
  const imageChanged = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== active) {
      setActive(slide);
    }
  };
  if (!sliderData) return null;
  return (
    <View style={[styles.container, style]}>
      <ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={14}
        onScroll={imageChanged}
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}>
        {sliderData.map(item => (
          <View style={styles.sliderContainer} key={item.id}>
            <Image
              source={{
                uri: item.image,
              }}
              style={{width: 240, height: 240, marginVertical: 20}}
            />
            <AppText style={styles.primaryText}>{item.header}</AppText>
            <AppText style={styles.secondaryText}>{item.text}</AppText>
          </View>
        ))}
      </ScrollView>
      <View style={styles.dots}>
        {sliderData.map((i, k) => (
          <Text
            key={k}
            style={
              k === active ? styles.paginationActiveText : styles.paginationText
            }>
            ⬤
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
  },
  scroll: {
    width,
  },
  dots: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  paginationActiveText: {
    color: style.color.primary,
    margin: 3,
    fontSize: 6,
  },
  paginationText: {
    color: '#A7AAB2',
    margin: 3,
    fontSize: 6,
  },
  sliderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryText: {
    fontSize: style.text.fontSize.textPrimary,
    fontWeight: style.text.fontWeight.textPrimary,
    lineHeight: style.text.lineHeight.textPrimary,
    textAlign: 'center',
    letterSpacing: style.text.letterSpacing.textPrimary,
    color: style.text.color.textPrimary,
    marginBottom: 10,
  },
  secondaryText: {
    fontSize: style.text.fontSize.textSecondary,
    fontWeight: style.text.fontWeight.textSecondary,
    lineHeight: style.text.lineHeight.textSecondary,
    textAlign: 'center',
    letterSpacing: style.text.letterSpacing.textSecondary,
    color: style.text.color.textSecondary,
    width: width,
    paddingHorizontal: 30,
    marginBottom: 20,
  },
});

export default Slider;
