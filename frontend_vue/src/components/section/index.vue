<template>
    <div class="section">
        <div class="section-header">{{title}}</div>
        <div class="section-body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'section',
    props: ['title']
}
</script>

<style lang="less" scoped>
    .section {
        .section {
            height: 20px;
        }
    }
</style>