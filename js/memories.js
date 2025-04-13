$(function(){
    $('#dowebok').fullpage({
        'navigation': true,
        'navigationPosition':"left",
        'navigationColor':['#fff'],
        'anchors': ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage', 'eighthPage', 'ninthPage', 'tenthPage', 'eleventhPage', 'twelfthPage', 'thirteenthPage', 'fourteenthPage', 'fifteenthPage'],
        'menu': '#menu',
        'continuousVertical': false,
        'scrollOverflow': true,
        'normalScrollElements': '.section:first-child',  // 允许在第一屏内正常滚动
        'afterLoad': function(anchorLink, index){
            // 显示或隐藏返回按钮
            if(index == 1){
                $('.back-to-first').fadeOut(300);
            } else {
                if($('.back-to-first').length === 0){
                    $('body').append('<div class="back-to-first">返回第一屏</div>');
                    $('.back-to-first').on('click', function(){
                        $.fn.fullpage.moveTo(1);
                    });
                } else {
                    $('.back-to-first').fadeIn(300);
                }
            }
        },
        'onLeave': function(index, nextIndex, direction){
            // 从第一屏离开时的处理
            if(index == 1){
                // 离开第一屏时，启用自动滚动
                $.fn.fullpage.setAutoScrolling(true);
            }
            // 返回第一屏时的处理
            if(nextIndex == 1){
                // 返回第一屏时，禁用自动滚动，让用户可以自由浏览第一屏内容
                setTimeout(function(){
                    $.fn.fullpage.setAutoScrolling(false);
                }, 700); // 等待滚动完成后再禁用自动滚动
            }
        }
    });
    
    // 添加点击第一屏滚动提示的事件
    $(document).on('click', '.scroll-hint', function(e){
        e.stopPropagation(); // 阻止事件冒泡
        // 启用自动滚动并移动到第二屏
        $.fn.fullpage.setAutoScrolling(true);
        $.fn.fullpage.moveTo(2);
    });
});
//loadAudioFile('../music/1.mp3');
