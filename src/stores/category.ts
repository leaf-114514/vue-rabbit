import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'

interface categoryItemChildren {
  children: any
  goods: any
  id: string
  name: string
  picture: string
}

interface categoryItemGoods {
  desc: string
  id: string
  name: string
  orderNum: any
  picture: string
  price: string
}

interface categoryItem {
  id: string
  name: string
  picture: string
  children: categoryItemChildren[]
  goods: categoryItemGoods[]
}
export const useCategoryStore = defineStore('category', () => {
  const categoryList = ref<categoryItem[]>()
        const getCategory = async () => {
        const res = await getCategoryAPI() as any
        categoryList.value = res.result 
        }

  return {
    categoryList,
    getCategory
  }
})

