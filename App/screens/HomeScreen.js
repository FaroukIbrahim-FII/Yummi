import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Animated,
  ScrollView,
} from 'react-native';
import MenuList from '../components/MenuList';
import PopularMenuList from '../components/PopularMenuList';
import {Modalize} from 'react-native-modalize';
import DetailedDish from '../components/DetailedDish/DetailedDish';
import useApi from '../hooks/useApi';

const {height} = Dimensions.get('window');

const selectionItems = [
  {id: 1, name: 'All Menu'},
  {id: 2, name: 'Breakfast'},
  {id: 3, name: 'Lunch'},
  {id: 4, name: 'Beverages'},
];

function HomeScreen({navigation}) {
  const [selectedItem, setSetlectedItem] = useState(null);

  const modalizeRef = useRef(null);

  const api = useApi();
  const popularList = api.popularList;
  const menuList = api.menuList;

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
            <PopularMenuList data={popularList} onPress={onOpen} />
            <MenuList
              list={menuList}
              selectionItems={selectionItems}
              onPress={onOpen}
            />
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
