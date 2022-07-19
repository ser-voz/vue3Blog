<template>
    <p>ID: {{postData.id}}</p>
    <h1>{{postData.title}}</h1>
    <p>{{postData.body}}</p>
    <main-button @click="$router.push(back)"
                 style="background: #ddd;border-color: #ddd;color: var(--gray-text-color)">
        Back
    </main-button>
</template>

<script>
    export default {
        name: "post-page",

        data() {
            return {
                postId: this.$route.params.id,
                postData: {},
                back: '',
            }
        },
        methods: {
            async getPost() {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.postId}`);
                if(response.ok) {
                    this.postData = await response.json();
                } else {
                    console.log('Ошибка')
                }
            }
        },

        mounted() {
            this.back = history.state.back;

            const localPost = JSON.parse(localStorage.getItem('post-items')).find(i => i.id === +this.postId);
            localPost ? this.postData = localPost : this.getPost();
        }

    }
</script>

<style scoped>
    p {
        font-size: 16px;
    }
</style>