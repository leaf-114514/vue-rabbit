import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'

interface categoryItem {
  id: string,
  name: string,
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

