<template>
    <header class="header">
            <div class="container">
                
                <a href="index.html" title="STX 건설" class="logo">
                    <img :src="require('@/assets/images/logo.png')" alt="STX 건설">
                </a>

                <div class="language">
                    <ul class="language-list">
                        <li>
                            <a href="#" class="language-no">eng</a>
                        </li>
                        <li>
                            <a href="#">kor</a>
                        </li>
                    </ul>
                </div>

            </div>

            <nav class="nav">
                <div class="container">
                    <ul class="gnb"></ul>
                </div>
            </nav>
        </header>
</template>

<script>
export default {

}
</script>

<style scoped>
/* 상단 */
.header {
    position: fixed;
    left: 0;
    top: 0;

    display: block;
    width: 100%;

    height: 80px;
    
    z-index: 999;
    overflow: hidden;

    transition: height 0.3s;
    
    box-shadow: 0px 0px 7px 0px rgb(0 0 0 / 20%);
    -webkit-box-shadow: 0px 0px 7px 0px rgb(0 0 0 / 20%);
    
}

.header-active{
    height: 410px;
}

.header > .container {
    height: 80px;    
}

.header > .container::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    width: 100vw;
    height: 80px;
    background-color: #fff;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
}

.logo {
    position: absolute;
    right: 100%;
    top: 50%;
    /* 보이는 내용물만 옮겨라. */
    transform: translate(-150px, -50%);
    display: block;
}

.nav {
    position: absolute;
    left: 0;
    top: 80px;
    display: block;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
}
.gnb {
    position: relative;
    display: block;
    text-align: center;

    /* 줄내림 하지 마라. */
    white-space: nowrap;
    letter-spacing: 0;
    font-size: 0;
    margin-top: -80px;
}

.gnb>li {
    position: relative;
    display: inline-block;
    padding: 0 35px;

    vertical-align: top;

    text-align: left;

    width: 178px;
}

.gnb>li>a {
    position: relative;
    display: block;
    font-size: 19px;
    font-weight: 500;
    color: #000;

    line-height: 80px;
}

.submenu {
    position: relative;
    display: block;
    padding-top: 40px;
    padding-bottom: 70px;
}
.submenu li {
    position: relative;
    display: block;

    line-height: 28.8px;
}

.submenu li a {
    position: relative;
    display: block;
    font-size: 15px;
    color: #fff;
}

/* 주메뉴 포커스 유지 */
.gnb > li:hover > a {
    color: #ed1c24;
}

.language {
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translate(150px, -50%);
    display: block;

    margin-right: -290px;
}

.language-list {
    position: relative;
    display: block;

    white-space: nowrap;
    font-size: 0;
}

.language-list li {
    position: relative;
    display: inline-block;
    margin-left: 24px;
}

.language-list li:first-child {
    margin-left: 0;
}

.language-list li:last-child::before {
    content: '';
    position: absolute;
    left: -12px;
    top: 50%;
    transform: translateY(-50%);

    display: block;
    width: 1px;
    height: 11px;
    background-color: #999;
}

.language-list li a {
    position: relative;
    display: block;

    font-size: 15px;
    color: #000;
    font-weight: 500;
    text-transform: uppercase;
}

.language-no {
    color: #888 !important;
}



</style>