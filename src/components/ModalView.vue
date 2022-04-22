<template>
    <div class="modal">
        <div class="cap"></div>
        <div class="modal-wrap">
            <b>이 사이트는 학습용으로 제작되었으며<br>리소스는 원저작자에게 있습니다.</b>
            ※ 본 사이트는 Chrome 에 최적화 되어있습니다.
            <div class="modal-comment">
                <a href="#" class="comment-bt">작업리뷰</a>
                <div class="comment-box">
                    <p>
                    </p>
                </div>
            </div>

            <button @click="closeModal" class="modal-close"></button>
        </div>
    </div>
</template>

<script>
import { getCurrentInstance } from 'vue';

export default {
    emits: ['close-modal'],
    setup() {
        const { emit } = getCurrentInstance();
        const closeModal = () => {
            emit('close-modal');
        }
        return {
            closeModal,
        }
    }
}
</script>

<style>
.modal {
    position: fixed;
    left: 0;
    top: 0;
    display: block;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
}

.modal-wrap {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 500px;
    height: 300px;
    z-index: 999;
    background-color: #fff;
    border-radius: 50px;
    text-align: center;
    font-size: 15px;
    overflow: hidden;
}

.modal-wrap b {
    position: relative;
    display: block;
    font-size: 17px;
    font-weight: 600;
    margin-top: 70px;
    margin-bottom: 50px;
}

.modal-desc {
    margin-top: 50px;
}

.modal-close {
    position: absolute;
    display: block;
    top: 25px;
    right: 25px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: transparent;
    transform: rotate(45deg);
    border: none;
    cursor: pointer;
    transition: .3s;
    visibility: visible;
    opacity: 1;
    transition: opacity .3s .5s;
}
.comment-on .modal-close {
    transition: opacity .3s;
    opacity: 0;
    visibility: hidden;
}
.modal-close:hover {
    transform: rotate(225deg);
}

.modal-close::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    width: 100%;
    height: 2px;
    background-color: #999;
}

.modal-close::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    width: 2px;
    height: 100%;
    background-color: #999;
}

.modal-comment {
    position: absolute;
    display: block;

    width: 100%;
    height: 40px;
    bottom: 0;
    background-color: #ec1c24;
    transition: .5s .3s;
}
.comment-on .modal-comment {
    height: 100%;
    transition: .5s;
}
.comment-bt {
    position: relative;
    display: inline-block;
    text-align: center;
    line-height: 40px;
    bottom: 0;
    height: 40px;
    width: 100%;
    color: #fff;
    font-size: 17px;
}
.comment-box {
    position: relative;
    display: block;
    
    padding-top: 10px;
}
.comment-box p{
    position: relative;
    display: block;
    font-size: 15px;
    margin-top: 40px;
    opacity: 0;
    color:#fff;
    transition: opacity .3s;
}
.comment-on .comment-box p{
    margin-top: 0;
    opacity: 1;
    transition: opacity .3s .5s;
}
</style>