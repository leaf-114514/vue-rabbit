import { getCategoryAPI } from "@/apis/category"
import { onMounted, ref } from "vue"
import { onBeforeRouteUpdate, useRoute } from "vue-router"

export const useCategory = () => {
    const categoryData = ref<{
        children: {
            brands: null
            categories: null
            goods: {
                desc: string
                id: string
                name: string
                orderNum: number
                picture: string
                price: string
            }[]
            id: string
            name: string
            parentId: null
            parentName: null
            picture: string
            saleProperties: null
        }[]
        id: string
        name: string
        picture: null
    }>()
    
    const route = useRoute()
    
    const getCategory = async (id=route.params.id) => {
        const res = await getCategoryAPI(id) as any
        categoryData.value = res.result
    }
    
    onBeforeRouteUpdate((to)=>{
      getCategory(to.params.id)
    })
    
    onMounted(()=>getCategory())

    return {
        categoryData
    }
}