/* eslint-disable @typescript-eslint/no-namespace */
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native'
import type { StackScreenProps } from '@react-navigation/stack'

export type BottomTabNavigationParamList = {
  Homepage: undefined
  MShort: undefined
  MLive: undefined
  Favorite: undefined
  Account: undefined
  Film: undefined
  Channel: undefined
  History: undefined
  MShortHashtagNavigator: {
    params: {
      fromBottomNav: boolean
    }
  }
  Upload: undefined
  Notification: undefined
  Error404: undefined
  Search: undefined
  PlaylistDetail: {
    id: number,
    name: string,
    goBackScreen: string
    // setPlaylists?: (value: IPlaylist[]) => void
  }
}

export type MainNavigationParamList = {
  BottomTab: NavigatorScreenParams<BottomTabNavigationParamList>
  SplashScreen: undefined
  LoginScreen: undefined
  DetailFilm: {
    item: any
  }
  MShortHashtagNavigator: {}
  Film: undefined
  FilterPage: undefined
  Channel: undefined
  Upload: undefined
  Notification: undefined
  Search: undefined
}

export type BottomScreenNavigationProps<
  T extends keyof BottomTabNavigationParamList,
> = CompositeScreenProps<
  BottomTabScreenProps<BottomTabNavigationParamList, T>,
  MainStackScreenNavigationProps<keyof MainNavigationParamList>
>

export type MainStackScreenNavigationProps<
  T extends keyof MainNavigationParamList,
> = StackScreenProps<MainNavigationParamList, T>

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainNavigationParamList {}
  }
}
