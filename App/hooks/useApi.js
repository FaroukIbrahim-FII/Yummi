import React, {useState, useEffect} from 'react';
import data from '../api/data';
import {useSelector, useDispatch} from 'react-redux';
import {GET_SLIDER_DATA} from '../redux/actions/sliderActions';
import {GET_POPULAR_MENU} from '../redux/actions/popularMenuActions';
import {GET_MENU_LIST} from '../redux/actions/menuListActions';
import {GET_RESTURANT_DETAILS} from '../redux/actions/resturantActions';

function useApitwo(props) {
  useEffect(() => {
    getslider();
    getPopularList();
    getMenuList();
    getresturantDetails();
  }, [sliderData, popularList, menuList, resturantDetails]);
  const dispatch = useDispatch();
  const getslider = async () => {
    try {
      const response = await data.getSliderData();
      dispatch(GET_SLIDER_DATA(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  const getPopularList = async () => {
    try {
      const response = await data.getPopularMenu();
      dispatch(GET_POPULAR_MENU(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  const getMenuList = async () => {
    try {
      const response = await data.getMenuList();
      dispatch(GET_MENU_LIST(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  const getresturantDetails = async () => {
    try {
      const response = await data.getResturantDetails();
      dispatch(GET_RESTURANT_DETAILS(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  const sliderData = useSelector(state => state.sliderData);
  const popularList = useSelector(state => state.popularList);
  const menuList = useSelector(state => state.menuList);
  const resturantDetails = useSelector(state => state.resturantDetails);
  // console.log('the data after dispatching', sliderData);

  return {sliderData, popularList, menuList, resturantDetails};
}

export default useApitwo;
