import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import AppButton from '../AppButton';
import AppText from '../AppText';
import style from '../../config/style';

function AddToCartContainer({handleDecrease, handleIncrease, quantity}) {
  return (
    <View
      style={
        Platform.OS === 'ios'
          ? styles.quantityContainerIos
          : styles.quantityContainerAndroid
      }>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <AppButton
            label={'-'}
            onPress={handleDecrease}
            style={styles.quantityButton}
            backgroundColor={'#E8EBEE'}
            fontSize={25}
          />
          <View style={styles.quantity}>
            <AppText>{quantity}</AppText>
          </View>
          <AppButton
            label={'+'}
            onPress={handleIncrease}
            backgroundColor={'#E8EBEE'}
            style={styles.quantityButton}
            fontSize={25}
          />
        </View>
        <View style={{flex: 1}}>
          <AppButton
            label={'Add to Cart'}
            style={styles.addToCart}
            backgroundColor={style.color.primary}
            textColor={style.color.white}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  quantityButton: {
    width: '30%',
    borderColor: '#E8EBEE',
  },
  addToCart: {
    width: '100%',
  },
  quantity: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
  },

  quantityContainerIos: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    shadowOpacity: 0.2,
    shadowRadius: 24,
    paddingTop: 5,
    paddingHorizontal: 20,
  },
  quantityContainerAndroid: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 10,
    paddingTop: 5,
    paddingHorizontal: 20,
  },
});

export default AddToCartContainer;
