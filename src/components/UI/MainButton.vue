<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "main-button",
    };
</script>

<style scoped>
    .btn {
        padding: 10px;
        border: 1px solid #57a957;
        border-radius: 3px;
        cursor: pointer;
        text-transform: uppercase;
        font: bold 13px arial, helvetica, sans-serif;
        color: #fff;
        text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
        background-color: #57a957;
        position: relative;
    }

    .btn:active {
        top: 2px;
        background: #57a957;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3) inset;
    }

    .btn.red {
        background-color: #ee5f5b;
        border-color: #c43c35;
    }

    .btn.red:active {
        background: #c43c35;
    }

    .btn:hover {
        opacity: 0.95;
    }
</style>
