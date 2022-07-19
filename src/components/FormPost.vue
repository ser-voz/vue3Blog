<template>
    <form @submit.prevent>
        <main-input
                :class="{ alert: alert && post.title === '' }"
                v-model="post.title"
                placeholder="Post name"
        >
        </main-input>

        <main-textarea
                :class="{ alert: alert && post.body === '' }"
                v-model="post.body"
                placeholder="Post description"
        >
        </main-textarea>

        <main-button @click="addPost">Add</main-button>
    </form>
</template>

<script>
    export default {
        name: "form-post",
        props: {
            modalShow: {
                type: Boolean,
                default: false,
            },
        },
        data() {
            return {
                post: {
                    'title': "",
                    'body': "",
                },
                alert: false,
            };
        },
        methods: {
            addPost() {
                if (this.post.title === "" || this.post.body === "") {
                    this.alert = true;
                    return;
                }
                this.post.id = Date.now();
                this.$emit("create", this.post);

                if (this.post.title !== "" && this.post.body !== "") {
                    this.post = {
                        title: "",
                        body: "",
                    };
                }
            },
        },
        watch: {
            modalShow() {
                this.alert = false;
            },
        },
    };
</script>

<style scoped></style>
