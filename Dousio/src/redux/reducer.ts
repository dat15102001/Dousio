import { combineReducers } from 'redux'
import appInfoReducer from './AppInfo/slice'
import type { AppInfoType } from './AppInfo/types'

export interface ApplicationState {
  appInfo: AppInfoType
}

const rootReducer = combineReducers({
  appInfoReducer,
})

export default rootReducer
