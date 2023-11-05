// file này hỗ trợ xử lý navigaiton ngoài màn hình

import React from 'react'

export const refNavigation = React.createRef<any>()

/**
 * func lấy ra thông tin màn hình trước khi đi vào màn hình đăng nhập
 * @return key: String
 */
export const getPreviousScreenKeyOfAuthStack: () => string | undefined = () => {
  // lấy ra toàn bộ state của navigation
  const routes = refNavigation.current?.getRootState()?.routes || []

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
export const navigate = (router: string, params?: any) => {
  refNavigation.current?.navigate(router, params)
}
