import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LoginField from '../LoginField';
import DishDetails from './DishDetails';
import DishIngredients from './DishIngredients';
import DishInfo from './DishInfo';
import AddToCartContainer from './AddToCartContainer';

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
            <DishDetails
              text={item.text}
              price={item.price}
              rate={item.rate}
              price={item.price}
            />
            <DishIngredients mainIng={mainIng} />
            <DishInfo foodInfo={foodInfo} />
          </View>
          <View style={{marginVertical: 24}}>
            <LoginField placeholder={'Add Instructions'} />
          </View>
        </View>
        <AddToCartContainer
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
          quantity={quantity}
        />
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
});

export default DetailedDish;
