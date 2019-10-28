<template>
    <div class="wrapper">
        <swiper :options="swiperOption"
                ref="mySwiper"
                @someSwiperEvent="callback">
            <swiper-slide v-for="item in swiperList"
                          :key="item.id">
                <img class="swiper-img"
                     :src="item.imgUrl"
                     alt="">
            </swiper-slide>

            <div class="swiper-pagination"
                 slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
    name: "HomeSwiper",
    data () {
        return {
            swiperOption: {
                loop: 'loop',
                pagination: '.swiper-pagination',
            },
            swiperList: [
                {
                    id: 1,
                    imgUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/fcc952d6b479db0e7e61922f3ee70f04.jpg_750x200_c5b67f70.jpg"
                }, {
                    id: 2,
                    imgUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/78b240572657a6da67e662540c846dd6.jpg_750x200_b75c8be9.jpg"
                }, {
                    id: 3,
                    imgUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/fd8b0bd3839c89f319efae4271d5eecb.jpg_750x200_98b9a5fb.jpg"
                }
            ]
        }
    },
    computed: {
        swiper () {
            return this.$refs.mySwiper.swiper
        }
    },
    mounted () {
        console.log('this is current swiper instance object', this.swiper)
        this.swiper.slideTo(3, 1000, false)
    },
    methods: {
        callback () {

        }
    },
}
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
    background: rgba(255, 255, 255, 1) !important;
}

.wrapper >>> .swiper-pagination-bullet {
    background: rgba(255, 255, 255, 0.5);
}

.wrapper {
    width: 100%;
    height: 0;
    padding-bottom: 26.9%;
    overflow: hidden;

    .swiper-img {
        width: 100%;
        height: auto;
    }
}
</style>