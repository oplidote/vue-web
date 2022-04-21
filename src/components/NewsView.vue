<template>
  <section class="news">
      <div class="container">
        <div class="news-board">
          <h3 class="news-title">공지사항</h3>
          <ul class="news-board-list">
            <li>
              <a href="#">
                <span class="news-board-txt"
                  >STX건설주식회사 M&A 관련 기본사항 안내</span
                >
                <span class="news-board-more"></span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="news-board-txt"
                  >회생회사 STX건설주식회사 M&A 공고</span
                >
                <span class="news-board-more"></span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="news-board-txt">2021년도 협력업체 모집공고</span>
                <span class="news-board-more"></span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="news-board-txt">STX건설 상호 사용 관련 안내</span>
                <span class="news-board-more"></span>
              </a>
            </li>
          </ul>
        </div>

        <div class="news-board">
          <h3 class="news-title">보도자료</h3>
          <ul class="news-board-list">
            <li>
              <a href="#">
                <span class="news-board-txt"
                  >STX건설, 춘천 레고랜드 테마파크 시공사 ‘선정’</span
                >
                <span class="news-board-more"></span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="news-board-txt"
                  >STX건설, 2018년 성장 '청신호'</span
                >
                <span class="news-board-more"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
.news {
    position: relative;
    display: block;
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ec1c24+50,58595b+50 */
    background: #ec1c24;
    /* Old browsers */
    background: -moz-linear-gradient(left, #ec1c24 50%, #58595b 50%);
    /* FF3.6-15 */
    background: -webkit-linear-gradient(left, #ec1c24 50%, #58595b 50%);
    /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right, #ec1c24 50%, #58595b 50%);
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ec1c24', endColorstr='#58595b', GradientType=1);
    /* IE6-9 */
}

.news .container {
    padding: 55px 0;
    overflow: hidden;
}

.news-board {
    position: relative;
    display: block;
    width: 50%;
    float: left;
}

.news-board:nth-child(1) {
    padding-right: 100px;
}

.news-board:nth-child(2) {
    padding-left: 100px;
}

.news-title {
    position: relative;
    display: block;
    font-size: 32px;
    color: #fff;
    padding-bottom: 45px;
}


.news-board-list {
    position: relative;
    display: block;

    border-top: 1px solid rgba(255, 255, 255, 0.6);
}

.news-board-list>li {
    position: relative;
    display: block;

    padding: 25px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.6);
}

.news-board-list>li>a {
    position: relative;
    display: block;
}

.news-board-txt {
    position: relative;
    display: block;
    color: #fff;
}

.news-board-more {
    position: absolute;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);

    display: block;
    width: 47px;
    height: 23px;

    background: url('@/assets/images/bg_common.png') no-repeat;
    background-position: 0px -48px;
}
</style>