$(function(){
    // 确保所有内容立即显示
    $('.section').addClass('active keep-active');
    
    // 强制所有元素显示
    $('body, body *, .section, .section *').css({
        'opacity': '1',
        'visibility': 'visible',
        'display': 'block',
        'height': 'auto',
        'overflow': 'visible',
        'animation': 'none',
        '-webkit-animation': 'none',
        'transition': 'none'
    });
    
    // 特别处理文本元素
    $('[class*="ly-stxt"], [class^="ly-txt"], [class^="ly-imgbox"], .timeline, .timepoint').css({
        'opacity': '1',
        'margin-top': '0',
        'height': 'auto',
        'display': 'block',
        'animation': 'none',
        '-webkit-animation': 'none',
        'transition': 'none'
    });
    
    // 移除滚动提示元素，因为我们希望所有内容一次性显示
    $('.scroll-hint').hide();
    
    // 完全禁用fullpage功能，让页面以常规方式滚动
    if ($.fn.fullpage) {
        $.fn.fullpage.destroy('all');
    }
    
    // 添加常规滚动功能
    $('html, body').css({
        'overflow': 'auto',
        'height': 'auto'
    });
}); 