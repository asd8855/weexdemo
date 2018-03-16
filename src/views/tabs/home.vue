<template>
    <div class="wrapper">
            <div class="name">
                <text class="text">姓名</text>
                <input type="text" placeholder="请输入你的姓名" class="input" @change="onchange">
            </div>
    </div>
</template>

<script>
    export default {
        name: "home",
        components: {

        },
        methods: {
            onchange(event) {
                console.log(event.value);
            }
        },

    }
</script>

<style scoped>
    .wrapper {
        background-color: #dddddd;
    }

    .input {
        font-size: 32px;
        flex: 1;
        padding-left: 30px;
        height: 80px;

    }

    .name {
        height: 80px;
        flex-direction: row;
        background-color: #00B4FF;
        width: 750px;
        align-items: center;
    }

    .text {
        font-size: 32px;
        left: 20px;

    }
</style>