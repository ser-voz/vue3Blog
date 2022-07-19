<template>
    <h1>Posts Page</h1>
    <div class="filter-panel">
        <div class="search-in">
            <label for="search-title">
                <input type="radio" checked name="search" id="search-title" value="title" v-model="searchIn">
                Search in title
            </label>
            <label for="search-description">
                <input type="radio" name="search" id="search-description" value="body" v-model="searchIn">
                Search in description
            </label>
        </div>
        <div class="search">
            <main-input v-model="searchField" placeholder="Search..."></main-input>

            <div class="search-result" v-if="searchField">
                <div v-for="post in searchedPost" @click="$router.push(`/posts/${post.id}`)" class="item">
                    <p class="title">{{post.title}}</p>
                    <p class="description">{{post.body}}</p>
                </div>
                <div v-if="searchedPost.length === 0" style="color: #dd0600">
                    Nothing found
                </div>
            </div>
        </div>
        <div class="sorting">
            <main-select :options="selectOptions" v-model:modelValue="sortBy"></main-select>
        </div>
    </div>

    <template v-if="posts.length">
        <post-item v-for="post in sortedPosts" :post="post" :key="post.id" @delete="deletePost"></post-item>
    </template>
    <div v-if="posts.length > 5" v-intersection="loadMorePosts" class="observer"></div>

    <preloader v-if="isLoading" style="margin-top: 60px"/>



</template>

<script>
    import PostItem from "../components/PostItem";
    export default {
        name: "posts-page",
        components: {PostItem},
        data() {
            return {
                posts: [],
                postsLocal: [],
                limit: 0,
                searchField: '',
                searchIn: 'title',
                sortBy: '',
                selectOptions: [
                    { name: 'By title', value: 'title' },
                    { name: 'By description', value: 'body' },
                ],
                isLoading: false
            }
        },

        methods: {
            // async fetchPosts() {
            //     this.isLoading = true;
            //
            //     const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${this.limit}`);
            //     this.posts = await response.json();
            //
            //     //concat posts with local posts
            //     this.posts = [...this.posts, ...this.postsLocal];
            //
            //     this.isLoading = false;
            // },


             async loadMorePosts() {
                if(this) this.limit += 10;
                try {
                    this.isLoading = true;
                    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${this.limit}`);
                    this.posts = await response.json();
                    this.isLoading = false;
                } catch (e) {
                    alert('Ошибка' + e);
                }
            },

            deletePost(deletedPost) {
                this.posts = this.posts.filter((post) => post !== deletedPost);

                //for local posts
                this.postsLocal = this.postsLocal.filter((post) => post !== deletedPost);
            },
        },
        computed: {
            searchedPost() {
                return this.posts.filter(i => i[this.searchIn].includes(this.searchField)).slice(0, 4);
            },
            sortedPosts() {
                return [...this.posts].sort((post1, post2) => post1[this.sortBy]?.localeCompare(post2[this.sortBy]));

            }
        },
        watch: {
            sortBy() {
                window.history.pushState(null, document.title,
                    `${window.location.pathname}?filter=${this.sortBy}`)
            },
            postsLocal() {
                localStorage.setItem("post-items", JSON.stringify(this.postsLocal));
            },

        },
        mounted() {
            const localPosts = JSON.parse(localStorage.getItem("post-items"));
            if(localPosts) this.postsLocal = localPosts;

            const dataUrl = Object.fromEntries(new URL(window.location).searchParams.entries());
            if(dataUrl.filter) this.sortBy = dataUrl.filter;

            this.loadMorePosts();
        }
    };
</script>

<style scoped>
    .filter-panel {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

    .search-in {
        width: 100%;
        margin-bottom: 10px;
    }

    .search-in label {
        margin-right: 10px;
        cursor: pointer;
    }

    select {
        width: 100%;
        border: 2px solid #aaa;
        border-radius: 4px;
        margin: 8px 0;
        outline: none;
        padding: 8px;
        box-sizing: border-box;
        cursor: pointer;
    }

    .search {
        position: relative;
        z-index: 1;
    }
    .filter-panel input,
    .filter-panel select {
        margin: 0;
    }
    
    .search-result {
        background: var(--main-elem-color);
        position: absolute;
        width: 100%;
        border: 2px solid #aaa;
        border-top: none;
        padding: 5px;
        overflow: hidden;
    }

    .search-result .item p {
        margin: 0;
    }

    .search-result .item {
        background: var(--main-bg-color);
        padding: 5px;
        margin-bottom: 5px;
        cursor: pointer;
    }

    .search-result .item:hover {
        opacity: .9;
    }

    .search-result .item:last-child {
        margin-bottom: 0;
    }

    .search-result .item .description {
        font-size: 10px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .search-result .item .title {
        font-weight: bold;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
</style>
