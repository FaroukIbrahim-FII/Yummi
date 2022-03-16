import {DefaultTheme} from '@react-navigation/native';

import style from '../config/style';

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: style.color.primary,
    background: style.color.white,
  },
};
