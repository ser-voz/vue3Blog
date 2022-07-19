<template>
    <div class="container">
        <header>
            <h1>Vue3 Blog</h1>
            <menu-buttons></menu-buttons>
        </header>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<style>
    :root {
        --main-text-color: #f9f9f9;
        --main-elem-color: #f9f9f9;
        --main-bg-color: rgb(51, 51, 51);
        --red-color: red;
        --gray-text-color: #555;
    }

    * {
        box-sizing: border-box;
    }

    body {
        background: var(--main-bg-color);
        color: var(--main-text-color);
        font-family: Arial, sans-serif;
        font-size: 14px;
    }

    a {
        color: var(--main-text-color);
        text-decoration: none;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .container {
        max-width: 1200px;
        width: 100%;
        margin: 30px auto;
    }

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 2px solid #fff;
        padding: 15px;
        margin-bottom: 30px;
    }

    .menu {
        display: flex;
        align-items: center;
    }

    .menu li {
        margin-right: 10px;
    }

    .items {
        display: flex;
    }



    form {
        display: flex;
        flex-direction: column;
    }
</style>
