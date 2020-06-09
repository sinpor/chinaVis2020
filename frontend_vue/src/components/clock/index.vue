<template>
    <div class="clock">{{time}}</div>
</template>

<script>
import { getFomatTime } from '@/utils'
export default {
    data() {
        return {
            time: getFomatTime()
        }
    },
    methods: {
        update() {
            requestAnimationFrame(this.update);
            this.time = getFomatTime()
        }
    },
    mounted() {
        this.update()
    }
}
</script>

<style lang="less" scoped>
@import "../../assets/style/variable.less";
.clock {
    font-family: "ds-digii";
    font-size: @font-size-base * 1.5;
}
</style>