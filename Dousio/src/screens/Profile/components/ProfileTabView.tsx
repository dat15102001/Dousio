import { StyleSheet, View } from 'react-native'
import React, { memo, useCallback, useMemo, useState } from 'react'
import { Route, SceneMap, TabBar, TabView } from 'react-native-tab-view'
import { Colors, screenWidth } from '@/theme'
import { NavigationState, Scene, SceneRendererProps } from 'react-native-tab-view/lib/typescript/src/types'
import Icon from '@/assets/svg/Icon'
import Album from './Album'

const ProfileTabView = () => {
  const [categoryChoose, setCategoryChoose] = useState<number>(0)

  const SecondRoute = () => (
    <View
      style={{ flex: 1, width: '100%', backgroundColor: 'green' }}
    />
  )

  const ThreeRoute = () => (
    <View
      style={{ flex: 1, width: '100%', backgroundColor: 'blue' }}
    />
  )

  const renderScene = useMemo(
    () =>
      SceneMap({
        album: Album,
        reels: SecondRoute,
        tag: ThreeRoute,
      }),
    [],
  )

  const [routes] = React.useState([
    { key: 'album', icon: <Icon iconName="grid" /> },
    { key: 'reels', icon: <Icon iconName="save" /> },
    { key: 'tag', icon: <Icon iconName="user-tagged" /> },
  ])

  const Tabbar = useCallback(
    (
      propsTabBar: SceneRendererProps & {
        navigationState: NavigationState<Route>
      },
    ) => {
      const Icon2 = useCallback(
        ({
          route,
          focused,
        }: Scene<Route> & {
          focused: boolean
          color: string
        }) => {
          // const style = focused ? styles.activeTextStyle : styles.textStyle
          return route.icon
        },
        [],
      )

      return (
        <TabBar
          {...propsTabBar}
          scrollEnabled
          pressColor={Colors.transparent}
          onTabPress={() =>
            setCategoryChoose(propsTabBar.navigationState.index)
          }
          indicatorStyle={styles.indicatorLine}
          style={styles.tabBar}
          indicatorContainerStyle={{ alignSelf: 'center' }}
          tabStyle={[{ width: screenWidth / 3 }]}
          renderIcon={props => props.route.icon}
          bounces
        />
      )
    },
    [],
  )

  return (
    <TabView
      navigationState={{ index: categoryChoose, routes }}
      renderScene={renderScene}
      lazy
      onIndexChange={setCategoryChoose}
      renderTabBar={propsTabBar => <Tabbar {...propsTabBar} />}
      style={{flex: 1, height: 1000, zIndex: 1}}
      overScrollMode='never'
    />
  )
}

export default memo(ProfileTabView)

const styles = StyleSheet.create({
  indicatorLine: {
    height: 1,
    backgroundColor: Colors.white,
  },
  tabBar: {
    backgroundColor: Colors.transparent,
  },
})

