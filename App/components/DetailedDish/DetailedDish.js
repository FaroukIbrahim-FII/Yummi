import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LoginField from '../LoginField';
import DishDetails from './DishDetails';
import DishIngredients from './DishIngredients';
import DishInfo from './DishInfo';
import AddToCartContainer from './AddToCartContainer';

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
            <DishIngredients mainIng={item['main ingredients']} />
            <DishInfo foodInfo={item['food info']} />
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
