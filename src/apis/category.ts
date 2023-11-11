import httpInstance from "@/utils/http"

export const getCategoryAPI = (id: string | string[]) => {
    return httpInstance({
        url: '/category',
        params: {
            id
        }
    })
}