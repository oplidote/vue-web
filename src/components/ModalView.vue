<template>
    <div class="modal-wrap">
        <div class="modal">
            <button @click="closeModal"><i class="fas fa-times"></i></button>
            <b>이 사이트는 스터디용으로 제작되었으며<br>리소스는 원저작자에게 있습니다.</b>
            <div class="modal-desc">
                본 사이트는 Chrome에 최적화 되어있습니다. 
            </div> 
        </div>
        
    </div>

</template>

<script>
import { getCurrentInstance } from 'vue';
export default {
    emits: ['close-modal'],
    setup(){
        const { emit } = getCurrentInstance();
        const closeModal = () => {
            emit('close-modal');
        }
        return {
            closeModal
        }
    }
}
</script>

<style>

 .modal-wrap {
     position: fixed;
     left: 0;
     top: 0;
     width: 100%;
     height: 100%;
     background-color: rgba(0,0,0,0.7);
     z-index: 99999;
 }
 .modal {
     position: absolute;
     left: 50%;
     top: 50%;
     transform: translate(-50%, -50%);
     display: block;
     width: 500px;
     height: 350px;
     background-color: #fff;
     border-radius: 20px;

     font-size: 50px;
 }

 .modal button {
     position: absolute;
     left: 50%;
     transform: translateX(-50%);
     bottom: 10px;
     border: 0;
     background-color: transparent;
     font-size: 100px;
     color: red;
     cursor: pointer;
 }

</style>