<template>
    <div class="header">
        <div class="header-left">
            <div>
                <i class="iconfont">&#xe624;</i>
            </div>
        </div>
        <div class="header-input">
            <span>
                <i class="iconfont">&#xe632;</i></span>请输入城市/景点/游玩主题
        </div>
        <div class="header-right">城市
            <span>
                <i class="iconfont">&#xe64a;</i>
            </span>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header {
    display: flex;
    line-height: 0.86rem;
    background-color: $bgColor;
    color: #fff;

    .header-left {
        width: 0.64rem;
        float: left;

        div {
            text-align: center;

            i {
                font-size: 0.4rem;
            }
        }
    }

    .header-input {
        flex: 1;
        line-height: 0.64rem;
        height: 0.64rem;
        margin-top: 0.12rem;
        margin-left: 0.2rem;
        background-color: #fff;
        border-radius: 0.1rem;
        color: #ccc;
        text-align: left;

        span {
            padding: 0 0.2rem;

            i {
                font-size: 0.4rem;
            }
        }
    }

    .header-right {
        width: 1.24rem;
        float: rigth;
        text-align: center;
    }
}
</style>