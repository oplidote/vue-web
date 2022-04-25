<template>
  <!-- 모달창 -->
  <ModalView v-if="modal_active" @close-modal="hideModal"/>

  <div class="wrap">
    <HeaderView />
    <!-- 내용자리 -->
    <router-view />
    <!--// 내용자리  -->
    <FooterView />
  </div>
</template>
<script>
import ModalView from '@/components/ModalView.vue'
import HeaderView from "@/components/HeaderView.vue";
import FooterView from "@/components/FooterView.vue";
import {ref} from 'vue';
export default {
  components: {
    ModalView,
    HeaderView,
    FooterView
  },
  setup() {
    const modal_active = ref(true);
    const hideModal = () => {
      modal_active.value = false
    }
    return {
      modal_active,
      hideModal
    };
  },
};
</script>

<style>
@charset 'utf-8';
@import url('@/assets/css/reset.css');
@import url("@/assets/css/notosanskr/NotoSansKR.css");
@import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* outline-style: none; */
  }

  a {
    color: #333;
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  img {
    border: 0;
    vertical-align: middle;
  }

  html {
    font-size: 16px;
    overflow-x: hidden;
  }


  body {
    font-family: 'Noto Sans KR', sans-serif;
    font-family: 'Black Han Sans', sans-serif;
    font-size: 1rem;
    font-weight: 200;
    line-height: 1.15;
    letter-spacing: 0px;
    color: #444;
    word-break: break-all;
  }

  /* 공통 요소 */
  .container {
    position: relative;
    display: block;
    width: 1200px;
    margin: 0 auto;
  }

  .wrap {
    position: relative;
    display: block;
    min-width: 1200px;
  }
</style>