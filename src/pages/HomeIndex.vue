<template>
    <div class="main">
    <!-- 비주얼 -->
    <VisualView/>
    <!-- 비즈니스 파트 -->
    <PartView/>
    <!-- 새소식 -->
    <NewsView/>
    <!-- 고객 서비스 -->
    <CustomerView/>
    <!-- 소개 -->
    <AboutView/>
    </div>
</template>

<script>
import VisualView from '@/components/VisualView.vue'
import PartView from '@/components/PartView.vue'
import NewsView from '@/components/NewsView.vue'
import CustomerView from '@/components/CustomerView.vue'
import AboutView from '@/components/AboutView.vue'

export default {
  components: {
    VisualView,
    PartView,
    NewsView,
    CustomerView,
    AboutView
  }
};
</script>

<style scoped>
  .main {
    position: relative;
    display: block;
    /* 상단의 header가 fixed 이므로 높이를 강제 반영 */
    padding-top: 80px;
  }
</style>
<style>
</style>