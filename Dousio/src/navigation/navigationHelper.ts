// file này hỗ trợ xử lý navigation ngoài màn hình

import {
  CommonActions,
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native'
import type { MainNavigationParamList } from './types'

export const refNavigation =
  createNavigationContainerRef<MainNavigationParamList>()
/**
 * func lấy ra thông tin màn hình trước khi đi vào màn hình đăng nhập
 * @return key: String
 */
export const getPreviousScreenKeyOfAuthStack: () => string | undefined = () => {
  // lấy ra toàn bộ state của navigation
  const routes = refNavigation.getRootState()?.routes || []

  // tìm vị trí của AuthScreen

  const index = routes.findIndex((i: any) => i.name === 'Login')

  if (index > 0) {
    return routes[index - 1].key
  }

  return undefined
}

/** func navigate tới màn hình chi tiết từ màn hình hiện tại khi click thông báo */
export const navigateToDetailHistoryFromCurrentScreen = () => {
  // refNavigation.current?.navigate(routesApp.DetailHistory, { id })
}

/** func navigate tới màn hình chi tiết nhà hàng từ màn hình hiện tại khi mở link share */
export const navigateToDetailStoreFromID = () => {
  // const currentId = Number(id)
  // refNavigation.current?.navigate(routesApp.Restaurant, { id: currentId })
}

/** func navigate tới màn hình nào đó từ màn hình hiện tại
 * @param routerName tên màn hình cần nvigate đến
 */
export const navigateFromCurrentScreen = (
  router: keyof MainNavigationParamList,
  params?: StackScreenProps<MainNavigationParamList>['route']['params'],
) => {
  if (refNavigation.isReady()) {
    refNavigation.dispatch(CommonActions.navigate(router, params))
  }
}

export const navigateChannelDetail = (params?: any) => {


  if (refNavigation.isReady()) {
    if (RefNavigationChannel?.current?.navigation.dispatch) {
      const resetRoute = CommonActions.reset({
        index: 0,
        routes: [{ name: 'ChannelPage', params }],
      })
      RefNavigationChannel.current.navigation.dispatch(resetRoute)
      RefNavigationChannel.current.navigation.navigate('Channel')
    } else {
      refNavigation.dispatch(
        CommonActions.navigate('BottomTab', {
          screen: 'Channel',
          params: {
            screen: 'ChannelPage',
            params,
          },
        }),
      )
    }
  }
}

export const navigateSearch = (params?: any) => {
  if (refNavigation.isReady()) {
    if (RefNavigationChannel?.current?.navigation.dispatch) {
      RefNavigationChannel.current.navigation.navigate('SearchPage')
      const resertRoute = CommonActions.reset({
        index: 0,
        routes: [{ name: 'SearchPage' }],
      })
      RefNavigationChannel.current.navigation.dispatch(resertRoute)
    } else {
      refNavigation.dispatch(
        CommonActions.navigate('BottomTab', {
          screen: 'Channel',
          params: {
            screen: 'SearchPage',
            params,
          },
        }),
      )
    }
  }
}
