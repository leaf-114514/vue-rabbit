import httpInstance from '@/utils/http'


export const getDetail = (id: string | string[]) => {
    return httpInstance({
      url: '/goods',
      params: {
        id
      }
    })
  }