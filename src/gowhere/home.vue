<template>
    <div>
        <div>
            <input type="text"
                   v-model="msg">
            <button @click="tj">添加</button>
            <ul v-for="item in list"
                :key="item.id">
                <li>{{item}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            msg: '',
            list: []
        }
    },
    methods: {
        tj () {
            this.list.push(this.msg)
        }
    },
}
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
}
</style>