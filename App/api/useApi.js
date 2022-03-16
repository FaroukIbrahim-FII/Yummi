import apiClient from './client';

const sliderEndPoint = '/slider';
const getSliderData = () => apiClient.get(sliderEndPoint);

export default {
  getSliderData,
};
