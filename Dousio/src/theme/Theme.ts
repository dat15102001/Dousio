// import { getDarkImages, getImages } from '@/assets/images'
import { Colors, DarkColors } from './Colors'
import { DefaultTheme, DarkTheme } from '@react-navigation/native'

export const getAppTheme = () => ({
  default: {
    Colors,
    Images: getImages(),
    NavigationTheme: DefaultTheme,
  },
  dark: {
    Colors: DarkColors,
    Images: getDarkImages(),
    NavigationTheme: DarkTheme,
  },
})
