<template>
    <div style="display: flex; align-items: center">
        <h3>Add new post</h3>
        <main-button style="margin-left: 10px" @click="toggleModal"
        >Add post
        </main-button
        >
    </div>
    <template v-if="posts.length > 0">
        <h2>Recent posts</h2>
        <post-list :posts="paginatedPosts" @delete="deletePost" />
    </template>
    <preloader v-if="isLoading" style="margin-top: 60px"/>


    <pagination-nav :paginationCount="paginationCount" @pageNum="changePage" :currentPage="page"></pagination-nav>

    <modal-window v-model:show="isModalShow">
        <form-post :modalShow="isModalShow" @create="addPost"></form-post>
    </modal-window>
</template>

<script>
    import FormPost from "@/components/FormPost";
    import PostList from "@/components/PostList";

    export default {
        name: "home-page",

        components: {PostList, FormPost},

        data() {
            return {
                posts: [],
                postsLocal: [],
                isModalShow: false,
                page: 1,
                showItems: 4,
                isLoading: false
            };
        },
        methods: {
            addPost(post) {
                this.posts = [...this.posts, post];
                this.postsLocal = [...this.postsLocal, post];
                this.isModalShow = false;
            },
            toggleModal() {
                this.isModalShow = !this.isModalShow;
            },
            deletePost(deletedPost) {
                this.posts = this.posts.filter((post) => post !== deletedPost);

                //for local posts
                this.postsLocal = this.postsLocal.filter((post) => post !== deletedPost);

                //if not items on page
                if(this.paginatedPosts.length === 0 && this.page !== 1) {
                    this.page -= 1;
                }

            },
            changePage(pageNum) {
                pageNum === 'pagePlus' ? this.page += 1 : pageNum === 'pageMinus' ? this.page -= 1 : this.page =
                    pageNum;
            },
            
            async getPosts() {
                this.isLoading = true;

                const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1`);
                const outerPosts = await response.json();

                this.posts = outerPosts;

                //concat local and outer posts
                this.posts = [...this.posts, ...this.postsLocal];

                this.isLoading = false;
            },
        },
        created() {
            const localPosts = JSON.parse(localStorage.getItem("post-items"));
            if(localPosts) this.postsLocal = localPosts;

            this.getPosts();

            const windowData = Object.fromEntries(new URL(window.location).searchParams.entries());
            if(windowData.page) this.page = +windowData.page;

        },
        computed: {
            paginationCount() {
                return Math.ceil(this.posts.length / this.showItems);
            },
            startIndex() {
                return (this.page - 1) * this.showItems;
            },
            endIndex() {
                return this.page * this.showItems;
            },
            paginatedPosts() {
                return [...this.posts].sort((a, b) => b.id - a.id).slice(this.startIndex, this.endIndex);
            },
        },
        watch: {
            postsLocal() {
                localStorage.setItem("post-items", JSON.stringify(this.postsLocal));
            },
            page() {
                window.history.pushState(null, document.title,
                    `${window.location.pathname}?page=${this.page}`);

                history.replaceState(history.state, '', `?page=${this.page}`);
            },
        },
    };
</script>

<style>
    .description {
        margin-top: 0;
    }

    .items .item {
        display: flex;
        flex-direction: column;
        max-width: 292px;
    }

    .items .item .btn {
        margin: auto 0 0 0;
    }

</style>
