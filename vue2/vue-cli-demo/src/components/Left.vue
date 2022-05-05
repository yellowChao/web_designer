<template>
    <div>
        Left component 
        <button @click="count += 1">{{ count }}</button>
        <hr>

        <van-switch />

        <hr>

        <button @click="sendDataToBody">sendDataToBody</button>

        <hr>

        <TestRef ref="testRef"/>
        <button @click="callBodyMethod">根据ref调用子组件方法</button>
    </div>
</template>

<script>
import EventBus from '../EventBus.js'
import TestRef from '../components/TestRef'
export default {
    components: {
        TestRef
    },
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
        sendDataToBody() {
            EventBus.$emit('share', '兄弟你好')
        },
        callBodyMethod() {
            this.$refs.testRef.change()
        }
    },
}
</script>

// scoped 会使得组件内的样式私有化，在内部标签中加入不重复的属性（eg: data-v-3c83f0b7）
<style lang="less" scoped>

div {
    background-color: red;
    height: 500px;
    width: 50%;
    display: inline-block;
}

// /deep/ 深度选择器, 帮助我们将第三方组件中多层嵌套的标签的样式修改
/deep/ .van-switch__node {
    background-color: blue;
}

</style>