export interface goodType {
    brand: {
      desc: any
      id: string
      logo: string
      name: string
      nameEn: string
      picture: string
      place: any
      type: any
    }
    categories: {
      id: string
      layer: number
      name: string
      parent: {
        id: string
        layer: number
        name: string
        parent: any
      }
    }[]
    collectCount: number
    commentCount: number
    desc: string
    details: {
      pictures: string[]
      properties: {
        name: string
        value: string
      }[]
    }
    discount: number
    evaluationInfo: any
    hotByDay: {
      desc: string
      id: string
      name: string
      orderNum: number
      picture: string
      price: string
    }[]
    id: string
    inventory: number
    isCollect: any
    isPreSale: boolean
    mainPictures: string[] 
    mainVideos: string[]
    name: string
    oldPrice: string
    price: string
    recommends: any
    salesCount: number
    similarProducts: {
      desc: string
      id: string
      name: string
      orderNum: number
      picture: string
      price: string
    }[]
    skus: {
      id: string
      inventory:number
      oldPrice: string
      price: string
      skuCode: string
      specs: {
        name: string
        valueName: string
      }[]
    }[]
    specs: {
      id: string
      name: string
      values: {
        desc: string
        name: string
        picture: string
      }[]
    }[]
    spuCode: string
    userAddresses: any
    videoScale: number
  }