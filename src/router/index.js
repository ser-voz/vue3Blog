import {createRouter, createWebHistory} from "vue-router";
import HomePage from "../pages/HomePage";
import PostsPage from "../pages/PostsPage";
import AboutPage from "../pages/AboutPage";
import PostPage from "../pages/PostPage";

const routes = [
    {
        name: "Home",
        path: "/",
        component: HomePage,
        menu: true
    },
    {
        name: "Posts",
        path: "/posts",
        component: PostsPage,
        menu: true
    },
    {
        path: '/posts/:id',
        component: PostPage,
        menu: false
    },
    {
        name: "About",
        path: "/about",
        component: AboutPage,
        menu: true
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
});

export default router;
