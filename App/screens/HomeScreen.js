import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Animated,
  ScrollView,
  FlatList,
} from 'react-native';
import AppIcon from '../components/AppIcon';
import AppText from '../components/AppText';
import MenuList from '../components/MenuList';
import PopularMenuList from '../components/PopularMenuList';
import {Modalize} from 'react-native-modalize';
import DetailedDish from '../components/DetailedDish';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const data = [
  {
    id: 1,
    image:
      'https://res.cloudinary.com/faroukibrahim/image/upload/v1647359228/Image_or0skt.png',
    text: 'Mushroom & Nori Noodle',
    time: '35 min',
    rate: 4.3,
    price: 11,
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/faroukibrahim/image/upload/v1647359227/Image_somqh2.png',
    text: 'Authentic Japanese Ramen',
    time: '30 min',
    rate: 4.1,
    price: 12,
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/faroukibrahim/image/upload/v1647359228/Image_bdssih.png',
    text: 'Chicken Peanut Noodle',
    time: '25 min',
    rate: 4.5,
    price: 8,
  },
  {
    id: 4,
    image:
      'https://res.cloudinary.com/faroukibrahim/image/upload/v1647359227/Image_b2hahw.png',
    text: 'Authentic Japanese Ramen',
    time: '20 min',
    rate: 4.8,
    price: 10,
  },
];

const menuData = [
  {
    id: 1,
    image:
      'https://res.cloudinary.com/faroukibrahim/image/upload/v1647417511/Image_iqvtok.png',
    price: 7,
    title: 'Original Ramen',
    time: '20 min',
    rate: 4.5,
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/faroukibrahim/image/upload/v1647417510/Image_rlt5ga.png',
    price: 10,
    title: 'Noodle with Chicken Curry Soup',
    time: '30 min',
    rate: 4.5,
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/faroukibrahim/image/upload/v1647417510/Image_umsrcr.png',
    price: 8,
    title: 'Kwiteau with Chicken Slices',
    time: '25 min',
    rate: 4.5,
  },
];

const selectionItems = [
  {id: 1, name: 'All Menu'},
  {id: 2, name: 'Breakfast'},
  {id: 3, name: 'Lunch'},
  {id: 4, name: 'Beverages'},
];

function HomeScreen({navigation}) {
  const [selectedItem, setSetlectedItem] = useState(null);
  const modalizeRef = useRef(null);

  const onOpen = item => {
    if (modalizeRef.current) {
      modalizeRef.current.open();
      setSetlectedItem(item);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://res.cloudinary.com/faroukibrahim/image/upload/v1647337424/Restaurant_Image_jyroya.png',
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.listContainer}>
        <ScrollView>
          <View>
            <PopularMenuList data={data} onPress={onOpen} />
            <MenuList list={menuData} selectionItems={selectionItems} />
          </View>
        </ScrollView>
      </View>
      <Modalize
        ref={modalizeRef}
        rootStyle={styles.rootStyle}
        modalStyle={styles.modal}
        handleStyle={{backgroundColor: '#E5E5E5'}}
        handlePosition={20}
        modalHeight={height * 0.85}
        customRenderer={() => (
          <Animated.View>
            <DetailedDish item={selectedItem} />
          </Animated.View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    height: height / 3,
  },
  imageContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 2.4,
    backgroundColor: '#F6F7F8',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
});

export default HomeScreen;
