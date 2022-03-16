import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import FoodDetails from '../screens/FoodDetails';
import ResturantDetails from '../screens/ResturantDetails';
import AppIcon from '../components/AppIcon';
import AppButton from '../components/AppButton';
import style from '../config/style';
import {useNavigation} from '@react-navigation/native';

const Stack = createStackNavigator();

function HomeNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="feed"
        component={HomeScreen}
        options={({navigation}) => ({
          headerStyle: styles.header,
          headerTitle: '',
          headerTransparent: true,
          headerTintColor: style.color.white,
          headerBackImage: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AppIcon
                name={'arrow-left'}
                size={30}
                color={style.color.white}
                style={styles.back}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity>
                <AppIcon
                  name={'magnify'}
                  size={30}
                  color={style.color.white}
                  style={{marginHorizontal: 5}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Resturant')}>
                <AppIcon
                  name={'information-outline'}
                  size={30}
                  color={style.color.white}
                  style={{marginLeft: 10, marginRight: 20}}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeftLabelVisible: false,
        })}
      />
      <Stack.Screen
        name="Food"
        component={FoodDetails}
        options={{presentation: 'modal'}}
      />
      <Stack.Screen
        name="Resturant"
        component={ResturantDetails}
        options={{
          headerTransparent: true,
          headerTitle: 'Resturant Info',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            height: 30,
          },
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AppIcon
                name={'arrow-left'}
                size={30}
                color={'black'}
                style={[styles.back, {height: 35}]}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
  back: {
    left: 10,
  },
});

export default HomeNavigator;
