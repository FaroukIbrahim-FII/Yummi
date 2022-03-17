import apiClient from './client';

const sliderEndPoint = '/slider';
const getSliderData = () => apiClient.get(sliderEndPoint);

const popularMenuEndPoint = '/popular_menu';
const getPopularMenu = () => apiClient.get(popularMenuEndPoint);

const menuListEndPoint = '/menu_list';
const getMenuList = () => apiClient.get(menuListEndPoint);

const resturantDetails = '/resturant';
const getResturantDetails = () => apiClient.get(resturantDetails);

export default {
  getSliderData,
  getPopularMenu,
  getMenuList,
  getResturantDetails,
};
