window.onload = function() {
    // 모달창
    let $modal = $('.modal');
    let $modal_close = $('.modal-close');
    let $comment_bt = $('.comment-bt');
    $modal_close.click(function () {
        $('html').css('overflow-y', 'auto');
        $modal.fadeOut(300);
    });
    $comment_bt.click(function () {

        $(this).hide();
        $(this).text('닫기').show(300);
        if($modal.hasClass('comment-on')){
            $(this).hide();
            $(this).text('작업 리뷰').show(300);
        }
        $modal.toggleClass('comment-on');
    });
    // 내용 더보기 버튼 기능
    // 1. 더보기 버튼 저장
    let visual_bt = $('.visual-bt');
    // 2. 보여줄 내용 Section
    let part_pos = $('.part').offset().top;
    // 3. 더보기 버튼 클릭시 .part 로 스크롤한다.
    visual_bt.click(function(){
        $('html').animate({
            scrollTop: part_pos
        });
    });

}