<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) of pages"
                          :key="index">
                <div class="icon"
                     v-for="item in page"
                     :key="item.id">
                    <div class="icon-img">
                        <img :src="item.iconUrl"
                             alt="">
                    </div>
                    <p>{{item.desc}}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
    name: "HomeIcons",
    data () {
        return {
            swiperOption: {
                autoplay: false
            },
            iconsList: [
                {
                    id: 1,
                    iconUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                    desc: "景点门票"
                },
                {
                    id: 2,
                    iconUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/3ef092d0a89ffddb7f781cda30c8ae49.png",
                    desc: "错峰出游"
                },
                {
                    id: 3,
                    iconUrl: "http://img1.qunarzz.com/piao/fusion/1803/ea/01d081dacb03cc02.png",
                    desc: "赏秋色"
                },
                {
                    id: 4,
                    iconUrl: "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
                    desc: "一日游"
                },
                {
                    id: 5,
                    iconUrl: "http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png",
                    desc: "上海自然博物馆"
                },
                {
                    id: 6,
                    iconUrl: "http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png",
                    desc: "黄浦江游船"
                },
                {
                    id: 7,
                    iconUrl: "http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png",
                    desc: "上海野生"
                },
                {
                    id: 8,
                    iconUrl: "http://img1.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png",
                    desc: "上海迪士尼"
                },
                {
                    id: 9,
                    iconUrl: "https://img1.qunarzz.com/piao/fusion/1810/50/26ffa31b56646402.png",
                    desc: "上海海昌"
                },
                {
                    id: 10,
                    iconUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
                    desc: "世纪公园"
                },

            ],
            pagination: '.swiper-pagination',
        }
    },
    methods: {

    },
    computed: {
        pages () {
            const pages = []
            this.iconsList.forEach((item, i) => {
                const page = Math.floor(i / 8)

                if (!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    },
}
</script>
<style lang="stylus" scoped>
* {
    // text-align: center;
}

.icons >>> .swiper-container {
    height: 0;
    padding-bottom: 52%;
}

.icons {
    margin-top: 0.1rem;

    .icon {
        position: relative;
        float: left;
        width: 25%;
        height: 0;
        padding-bottom: 25%;

        .icon-img {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0.44rem;
            box-sizing: border-box;
            padding: 0.1rem;

            img {
                display: block;
                margin: 0 auto;
                height: 100%;
            }
        }

        p {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 0.44rem;
            line-height: 0.3rem;
            text-align: center;
            color: #333;
            font-size: 0.28rem;
        }
    }
}
</style>