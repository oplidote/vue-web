<template>
  <header
    class="header"
    :class="[gnb_active ? 'header_active' : '']"
    ref="ref_header"
  >
    <div class="container">
      <a href="index.html" title="STX 건설" class="logo">
        <img :src="require('@/assets/images/logo.png')" alt="STX 건설" />
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
        <ul
          class="gnb"
          ref="ref_gnb"
          @mouseenter="overFn"
          @mouseleave="LeaveFn"
          v-html="menu_html"
        ></ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    const ref_header = ref(null);
    const ref_gnb = ref(null);
    const gnb_active = ref(false);
    const overFn = () => {
      gnb_active.value = true;
    };
    const leaveFn = () => {
      gnb_active.value - false;
    };
    // 동적 메뉴 html 보관
    const menu_html = ref("");
    onMounted(() => {
      // 메뉴를 작성하는 코드
      // 1. 메뉴를 위한 사용자 객체 생성자 함수
      function MakeMenu(_mainmenu, _mainlink, _submenu, _sublink) {
        this.mainmenu = _mainmenu;
        this.mainlink = _mainlink;
        this.submenu = _submenu;
        this.sublink = _sublink;
      }

      let menu_data = [
        new MakeMenu(
          "회사소개",
          "#",
          "인사말,STX건설,기업문화,STX건설연혁,조직안내,윤리경영,안전·환경·품질경영,찾아오시는 길",
          "#,#,#,#,#,#,#,#"
        ),
        new MakeMenu(
          "사업분야",
          "#",
          "건축사업,주택사업,토목사업,플랜트/공작기계사업,해외사업",
          "#,#,#,#,#"
        ),
        new MakeMenu(
          "사회공헌",
          "#",
          "나눔의생각,주요활동분야,활동현황",
          "#,#,#"
        ),
        new MakeMenu(
          "홍보센터",
          "#",
          "홍보동영상,홍보브로슈어,STX건설뉴스",
          "#,#,#"
        ),
        new MakeMenu("고객지원", "#", "자주묻는질문, 고객문의", "#,#"),
        new MakeMenu("채용정보", "#", "채용안내, 채용공고, 채용FAQ", "#,#,#"),
      ];
      // 2. 총 메뉴의 개수를 저장한다.
      let menu_total = menu_data.length;

      // 3. li 를 만들어야 한다.
      let menu_li = "";

      for (let i = 0; i < menu_total; i++) {
        // Menu
        menu_li += "<li>";
        let temp = menu_data[i];
        let cate = `<a href="${temp.mainlink}">${temp.mainmenu}</a>`;
        // Submenu
        cate += `<ul class="submenu">`;
        // Submenu - category
        let temp_sub = temp.submenu.split(",");
        let temp_sub_link = temp.sublink.split(",");
        let temp_sub_lis = "";

        for (let j = 0; j < temp_sub.length; j++) {
          temp_sub_lis += `<li><a href="${temp_sub_link[j]}">${temp_sub[j]}</a></li>`;
        }
        cate += temp_sub_lis;
        cate += `</ul>`;
        menu_li += cate;
        menu_li += "</li>";
      }
      menu_html.value = menu_li;
      console.log(menu_li);
    });
    return {
      ref_header,
      ref_gnb,
      gnb_active,
      overFn,
      leaveFn,
      menu_html,
    };
  },
};
</script>

<style>
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

.header-active {
  height: 410px;
}

.header > .container {
  height: 80px;
}

.header > .container::before {
  content: "";
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

.gnb > li {
  position: relative;
  display: inline-block;
  padding: 0 35px;

  vertical-align: top;

  text-align: left;

  width: 178px;
}

.gnb > li > a {
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
  content: "";
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