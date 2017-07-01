define(['jquery', 'app/Carousel', 'app/GoTop', 'app/loadmore'], function($, Carousel, GoTop, LoadMore) {
    GoTop.init($('#footer'))

    Carousel.init($('.carousel'))

    LoadMore.init($('.waterfall-ct'), $('.loadmore'))
})