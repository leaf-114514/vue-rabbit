<script setup lang="ts">
import { getHotGoodsAPI } from '@/apis/detail';
import GoodItem from '@/views/Home/components/GoodItem.vue';
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';
const hotList = ref<{
  desc: string
  id: string
  name: string
  orderNum: number
  picture: string
  price: string
}[]>()
const route = useRoute()
const getHotList = async ()=>{
  const res = await getHotGoodsAPI(route.params.id, 1) as any
  hotList.value = res.result
}

onMounted(()=>getHotList())
</script>


<template>
  <div class="goods-hot">
    <h3>周日榜单</h3>
    <!-- 商品区块 -->
    <GoodItem v-for="item in hotList" :good="item" />
  </div>
</template>


<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

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
}
</style>