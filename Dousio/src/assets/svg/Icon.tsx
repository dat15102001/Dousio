import React from 'react'
import HomeSvg from './Common/HomeSvg'
import { IconName } from './type'
import ICHome from './BottomTab/ICHomeTab'
import ICHomeTabActive from './BottomTab/ICHomeTabActive'
import ICSearchTab from './BottomTab/ICSearchTab'
import ICSearchTabActive from './BottomTab/ICSearchTabActive'
import ICFavoriteTab from './BottomTab/ICFavoriteTab'
import ICFavoriteTabActive from './BottomTab/ICFavoriteTabActive'
import ICCreateTab from './BottomTab/ICCreateTab'
import ICProfileTab from './BottomTab/ICProfileTab'
import ICProfileTabActive from './BottomTab/ICProfileTabActive'
import ICLogo from './ICLogo'
import ICCreate from './ICCreate'
import ICThreeDotHorizontal from './ICThreedotHorizontal'
import ICShare from './ICShare'
import ICSave from './ICSave'
import ICMute from './ICMute'
import ICVolume from './ICVolume'
import ICSetting from './ICSetting'
import ICExplore from './ICExplore'
import ICDropDown from './ICDropDown'
import ICUserTagged from './ICUserTagged'
import ICGrid from './ICGrid'
import ICFeed from './ICFeed'
import ICEdit from './ICEdit'
import ICBack from './ICBack'
import ICComment from './ICComment'
import ICPlay from './ICPlay'
import ICPauseVideo from './ICPauseVideo'
import { PlaySvg } from '.'
import ICSaveFill from './ICSaveFill'
import ICBack2 from './ICBack2'
import ICArrowDown from './ICArrowDown'
import ICDelete from './ICDelete'
import ICShuffle from './ICShuffle'
import ICNext from './ICNext'
import ICPrev from './ICPrev'
import ICLoop from './ICLoop'
import ICShareMusic from './ICShareMusic'
import ICSpeed from './ICSpeed'
import ICDownload from './ICDownLoad'
import ICMusicPlus from './ICMusicPlus'
import ICChat from './ICChat'

interface IProps {
  iconName: IconName
  size?: number
  color?: string
}

const Icon = (props: IProps) => {
  const { iconName, size, color } = props

  const icon = new Map([
    ['home', <HomeSvg size={size} color={color} />],
    ['home-tab', <ICHome size={size} color={color} />],
    ['home-tab-active', <ICHomeTabActive size={size} color={color} />],
    ['search-tab', <ICSearchTab size={size} color={color} />],
    ['search-tab-active', <ICSearchTabActive size={size} color={color} />],
    ['create-tab', <ICCreateTab size={size} color={color} />],
    ['favorite-tab', <ICFavoriteTab size={size} color={color} />],
    ['favorite-tab-active', <ICFavoriteTabActive size={size} color={color} />],
    ['profile-tab', <ICProfileTab size={size} color={color} />],
    ['profile-tab-active', <ICProfileTabActive size={size} color={color} />],
    ['logo', <ICLogo size={size} color={color} />],
    ['create', <ICCreate size={size} color={color} />],
    [
      'three-dot-horizontal',
      <ICThreeDotHorizontal size={size} color={color} />,
    ],
    ['share', <ICShare size={size} color={color} />],
    ['save', <ICSave size={size} color={color} />],
    ['save-fill', <ICSaveFill size={size} color={color} />],
    ['mute', <ICMute size={size} color={color} />],
    ['volume', <ICVolume size={size} color={color} />],
    ['setting', <ICSetting size={size} color={color} />],
    ['explore', <ICExplore size={size} color={color} />],
    ['dropdown', <ICDropDown size={size} color={color} />],
    ['user-tagged', <ICUserTagged size={size} color={color} />],
    ['grid', <ICGrid size={size} color={color} />],
    ['feed', <ICFeed size={size} color={color} />],
    ['edit', <ICEdit size={size} color={color} />],
    ['back', <ICBack size={size} color={color} />],
    ['back2', <ICBack2 size={size} color={color} />],
    ['comment', <ICComment size={size} color={color} />],
    ['play', <ICPlay size={size} color={color} />],
    ['pause', <ICPauseVideo size={size} color={color} />],
    ['arrowdown', <ICArrowDown size={size} color={color} />],
    ['delete', <ICDelete size={size} color={color} />],
    ['shuffle', <ICShuffle size={size} color={color} />],
    ['next', <ICNext size={size} color={color} />],
    ['prev', <ICPrev size={size} color={color} />],
    ['loop', <ICLoop size={size} color={color} />],
    ['share-music', <ICShareMusic size={size} color={color} />],
    ['speed', <ICSpeed size={size} color={color} />],
    ['download', <ICDownload size={size} color={color} />],
    ['music-plus', <ICMusicPlus size={size} color={color} />],
    ['chat', <ICChat size={size} color={color} />],
  ])
  return icon.get(iconName) ?? null
}

export default Icon
