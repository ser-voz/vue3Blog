<template>
    <div class="items">
        <post-item
                v-for="post in posts"
                :post="post"
                :key="post.id"
                @delete="$emit('delete', post)"
        />
    </div>
</template>

<script>
    import PostItem from "./PostItem";

    export default {
        name: "post-list",

        components: {PostItem},
        props: {
            posts: {
                type: [Array, Object],
                require: true,
            },
        },
    };
</script>

<style scoped></style>
