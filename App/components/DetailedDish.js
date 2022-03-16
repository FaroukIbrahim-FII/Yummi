import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, Platform} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import style from '../config/style';
import AppButton from './AppButton';
import AppText from './AppText';
import LoginField from './LoginField';
import AppIcon from './AppIcon';

const mainIng = [
  {
    id: 1,
    image:
      'https://res.cloudinary.com/faroukibrahim/image/upload/v1647434009/Image_36x36-2_l8dsii.png',
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/faroukibrahim/image/upload/v1647433747/Image_36x36_knr5jd.png',
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/faroukibrahim/image/upload/v1647433747/Image_36x36-5_jqhled.png',
  },
  {
    id: 4,
    image:
      'https://res.cloudinary.com/faroukibrahim/image/upload/v1647433747/Image_36x36-4_vjmwcp.png',
  },
  {
    id: 5,
    image:
      'https://res.cloudinary.com/faroukibrahim/image/upload/v1647433747/Image_36x36-2_fflacy.png',
  },
];

const foodInfo = [
  {id: 1, data: '1990 kal', icon: 'fire', color: '#F55053'},
  {id: 2, data: 'Organic', icon: 'sprout', color: '#00B167'},
  {id: 3, data: 'Free Gluten', icon: 'barley-off', color: '#F26333'},
];

function DetailedDish({item}) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity <= 1 ? 1 : quantity - 1);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.scrollContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={{uri: item.image}}
              style={{width: '100%', height: 287}}
            />
          </View>
          <View style={{borderBottomColor: '#D0D7DD', borderBottomWidth: 0.5}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                flex: 1,
              }}>
              <AppText style={styles.header}>{item.text}</AppText>
              <AppText style={styles.price}>${item.price}</AppText>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 12,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <AppIcon name={'star'} size={12} color="gold" />
                <AppText style={styles.iconText}>{item.rate}</AppText>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <AppIcon name={'clock'} size={12} color="#5C616F" />
                <AppText style={styles.iconText}>{item.time}</AppText>
              </View>
            </View>
            <View>
              <AppText style={styles.text}>
                Lorem ipsum et dolor sit amet, and consectetur eadipiscing elit.
                Ametmo magna the cursus yum dolor praesenta the pulvinar
                tristique the food.
              </AppText>
            </View>
            <View>
              <AppText style={styles.mainIng}>Main Ingredients</AppText>
              <View
                style={{flexDirection: 'row', marginTop: 14, marginBottom: 20}}>
                {mainIng.map(item => (
                  <Image
                    key={item.id}
                    source={{uri: item.image}}
                    style={{width: 36, height: 36, marginRight: 12}}
                  />
                ))}
              </View>
            </View>
            <View>
              <AppText style={styles.mainIng}>Food Informations</AppText>
              <View
                style={{flexDirection: 'row', marginTop: 12, marginBottom: 24}}>
                {foodInfo.map(item => (
                  <View
                    key={item.id}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      borderRadius: 6,
                      borderColor: '#CDD4DB',
                      borderWidth: 0.5,
                      backgroundColor: '#F6F7F8',
                      paddingHorizontal: 10,
                      paddingVertical: 6,
                      marginRight: 8,
                    }}>
                    <AppIcon
                      name={item.icon}
                      color={item.color}
                      size={14}
                      style={{marginRight: 4}}
                    />
                    <AppText
                      style={{
                        fontSize: 13,
                        fontWeight: '500',
                        lineHeight: 18,
                        letterSpacing: -0.12,
                        color: '#363D4E',
                      }}>
                      {item.data}
                    </AppText>
                  </View>
                ))}
              </View>
            </View>
          </View>
          <View style={{marginVertical: 24}}>
            <LoginField placeholder={'Add Instructions'} />
          </View>
        </View>
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 33,
  },
  scrollContainer: {
    paddingTop: 33,
    paddingHorizontal: 20,
  },
  imageContainer: {
    overflow: 'hidden',
    borderRadius: 16,
  },
  quantityButton: {
    width: '30%',
    borderColor: '#E8EBEE',
  },
  addToCart: {
    width: '100%',
  },
  quantity: {
    // padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: -0.16,
    color: '#040C22',
    marginVertical: 12,
    flex: 1.8,
  },
  price: {
    flex: 1,
    textAlign: 'right',
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 32,
    letterSpacing: -0.24,
    color: '#F26333',
  },
  iconText: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: -0.12,
    color: '#5C616F',
    marginRight: 20,
    marginLeft: 5,
  },
  text: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: -0.2,
    color: '#5C616F',
    marginBottom: 20,
  },
  mainIng: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: -0.2,
    color: '#363D4E',
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

export default DetailedDish;
