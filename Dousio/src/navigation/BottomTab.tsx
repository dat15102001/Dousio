import { Colors } from '@/theme'
import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useMemo } from 'react'
import Homepage from '@/screens/Homepage'
import Search from '@/screens/Search'
import { CheckSvg, CloseSvg, CopySvg, EditSvg } from '@/assets/svg'
import Icon from '@/assets/svg/Icon'
import BottomTabBar from '@/components/BottomTabBar'
import Favorite from '@/screens/Favorite'
import Profile from '@/screens/Profile'
import Music from '@/screens/Music'
const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()
const BottomTab = () => {
  const screenOptions = useMemo(
    () => ({
      headerShown: false,
      tabBarActiveTintColor: Colors.white,
      tabBarInactiveTintColor: Colors.white,
    }),
    [],
  )

  const homeTabOptions = useMemo(() => {
    return {
      tabBarIcon: ({ color, focused }) => (
        <Icon color={color} iconName={focused ? 'home-tab-active' : 'home-tab'} />
      ),
    }
  }, [])

  const searchTabOptions = useMemo(() => {
    return {
      tabBarIcon: ({ color, focused }) => (
        <Icon color={color} iconName={focused ? 'search-tab-active' : 'search-tab'} />
      ),
    }
  }, [])

  const createTabOptions = useMemo(() => {
    return {
      tabBarIcon: ({ color, focused }) => (
        <Icon color={color} iconName='create-tab' />
      ),
    }
  }, [])

  const favoriteTabOptions = useMemo(() => {
    return {
      tabBarIcon: ({ color, focused }) => (
        <Icon color={color} iconName={focused ? 'favorite-tab-active' : 'favorite-tab'} />
      ),
    }
  }, [])

  const profileTabOptions = useMemo(() => {
    return {
      tabBarIcon: ({ color, focused }) => (
        <Icon color={color} iconName={focused ? 'profile-tab-active' : 'profile-tab'} />
      ),
    }
  }, [])

  return (
    <Tab.Navigator
      tabBar={props => <BottomTabBar {...props} />}
      screenOptions={screenOptions}
    >
      <Tab.Screen name={'Homepage'} component={Homepage} options={homeTabOptions} />
      <Tab.Screen name={'Music'} component={Music} options={searchTabOptions}/>
      <Tab.Screen name={'Create'} component={Search} options={createTabOptions}/>
      <Tab.Screen name={'Favorite'} component={Favorite} options={favoriteTabOptions}/>
      <Tab.Screen name={'Profile'} component={Profile} options={profileTabOptions}/>
    </Tab.Navigator>
  )
}

export default BottomTab
