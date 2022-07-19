<template>
    <div class="item">
        <p>ID: {{post.id}}</p>
        <p class="title" @click="$router.push(`/posts/${post.id}`)">{{ post.title }}</p>
        <p class="description">{{ post.body }}</p>
        <main-button class="red" @click="$emit('delete', post)">Delete</main-button>
    </div>
</template>

<script>
    export default {
        name: "post-item",
        props: {
            post: {
                type: Object,
                require: true,
            },
        },
    };
</script>

<style scoped>
    .item {
        border: 1px solid #fff;
        padding: 15px;
        width: 100%;
        margin-right: 10px;
        margin-bottom: 10px;
    }

    .item:last-child {
        margin-right: 0;
    }

    .item .title {
        font-size: 18px;
        font-weight: 700;
        cursor: pointer;
    }

    .item .description {
        font-size: 16px;
    }

    .item .title:hover {
        color: #57a957;
    }
</style>
