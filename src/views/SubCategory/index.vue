<script setup lang="ts">
import { getCategoryFilterAPI, getSubCategoryAPI } from '@/apis/category';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import GoodItem from '../Home/components/GoodItem.vue';

const categoryData = ref<{
  brands: {
    desc: string
    id: string
    logo: string
    name: string
    nameEn: string
    picture: string
    place: string
    type: null
  }[]
  categories: {
    id: string
    layer: number
    name: string
    parent: null
  }[]
  goods: {
    desc: string
    id: string
    name: string
    orderNum: string
    picture: string
    price: string
  }[]
  id: string
  name: string
  parentId: string
  parentName: string
  picture: null
  saleProperties: {
    id: string
    name: string
    properties: {
      id: string
      name: string
    }[]
  }[]
}>()
const route = useRoute()
const getCategoryDate = async ()=>{
  const res = await getCategoryFilterAPI(route.params.id) as any
  categoryData.value = res.result
}

onMounted(()=>getCategoryDate())

const goodList = ref<{
    desc: string
    id: string
    name: string
    orderNum: number
    picture: string
    price: string
  }[]>()
const goodListRequestData = ref({
    categoryId: route.params.id,
    page: 1,
    pageSize: 20,
    sortField: 'publishTime'
  })
const getGoodList = async ()=>{
  const res = await getSubCategoryAPI(goodListRequestData.value) as any
  goodList.value = res.result.items
  
}

const tabChange = ()=>{
  goodListRequestData.value.page = 1
    getGoodList()
  }

  const disabled = ref(false)
  const load = async ()=>{
    goodListRequestData.value.page++
    const res = await getSubCategoryAPI(goodListRequestData.value) as any
    goodList.value = [...goodList.value as any, ...res.result.items]
    if(goodList.value.length === 0) {
      disabled.value = true
    }
  }

onMounted(()=>getGoodList())
</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${categoryData?.parentId}` }">{{ categoryData?.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ categoryData?.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="goodListRequestData.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
         <!-- 商品列表-->
         <GoodItem v-for="good in goodList" :good="good" />
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>