import request from './request'
import { APIs } from './config'
import { handleError } from './handleError'

export const getMusic = async () => {
  try {
    const result = await request().get(`${APIs.MUSIC}`)
    const { data } = result
    
    return {
      success: true,
      data,
    }
  } catch (e) {
    return handleError(e)
  }
}
