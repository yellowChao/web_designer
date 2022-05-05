<template>
    <div>
        Right component 
        <button @click="count += 1">{{ count }}</button>

        <hr>

        <button @click="updateData">回传给父组件</button>
    </div>
</template>

<script>
import EventBus from '../EventBus.js'
export default {
    props: {
        initCount: {
            type: Number,
            required: true,
            default: 0
        }
    },

    data() {
        return {
            count: this.initCount //将props 赋值给data, props不要进行赋值操作， 是只读的
        }
    },
    methods: {
        updateData() {
            this.$emit('dataChange', 250)
        }
    },
    //在实例创建完成后被立即同步调用
    created() {
        EventBus.$on('share', (val) => {
            console.log(`兄弟收到的信息：${val}`);
        })
    },
    beforeDestroy() {
        // 对监听事件销毁
        Eventbus.$off('share')
    },
}
</script>

<style lang="less" scoped>

div {
    background-color: yellow;
    height: 500px;
    width: 50%;
    display: inline-block;
}

</style>