﻿/// <reference path="../../views/detail.html" />
/// <reference path="../../views/detail.html" />
$(function () {
    //向页面添加公共头部和底部
    //$('#page-Home').append(createPage.header())
    $('#page-Home').append(createPage.footer())
    //点击搜索框单出蒙层
    $('.index-search').on('tap', function () {
        $.popup('.popup--search-popup');
    });
    //路由跳转
    $('#linkJump li').eq(0).on('tap', function () {
        createPage.returnPage('createGoodClass')
        $.router.load("#pageGoodClass");
        $.reinitSwiper('slive-swiper-content')
    })
    $('#linkJump li').eq(1).on('tap', function () {
        createPage.returnPage('classifiCation')
        $.router.load("#classifiCation");
        $.reinitSwiper('slive-swiper-content')
    })

    
    $.init();
});