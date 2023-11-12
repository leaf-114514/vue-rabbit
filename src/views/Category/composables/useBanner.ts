import { getBannerAPI } from "@/apis/home"
import { onMounted,  ref } from "vue"

interface bannerListItme {
    hrefUrl: string
    id: string
    imgUrl: string
    type: string
}

export const useBanner = () => {
    const bannerList = ref<bannerListItme[]>()
    
    const getBanner = async ()=>{
        const res = await getBannerAPI('2') as any
        bannerList.value = res.result
    }
    
    onMounted(() => getBanner())

    return {
        bannerList
    }
}