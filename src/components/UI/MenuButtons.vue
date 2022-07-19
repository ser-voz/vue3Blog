<template>
    <ul class="button-group">
        <li>
            <button
                    class="large button"
                    v-for="link in filteredMenuItems"
                    @click="$router.push(link.path)"
                    :key="link.path"
            >
                {{ link.name }}
            </button>
        </li>
    </ul>
</template>

<script>
    import MenuLinks from "../../router/index";

    export default {
        name: "menu-buttons",
        data() {
            return {
                links: [],
            };
        },
        computed: {
            filteredMenuItems() {
                return this.links.filter(i => i.menu);
            }
        },
        created() {
            this.links = MenuLinks.options.routes;
        },
    };
</script>

<style scoped>
    .button-group {
        display: inline-block;
        font-size: 0;
        margin: 0;
        background: rgb(255 255 255 / 50%);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        padding: 7px;
        -moz-border-radius: 7px;
        -webkit-border-radius: 7px;
        border-radius: 7px;
        zoom: 1;
    }

    .button-group li {
        margin-right: -1px;
        display: inline-block;
        zoom: 1;
    }

    .button-group li:first-child .button {
        -moz-border-radius: 3px 0 0 3px;
        -webkit-border-radius: 3px 0 0 3px;
        border-radius: 3px 0 0 3px;
    }

    .button-group li:last-child .button {
        -moz-border-radius: 0 3px 3px 0;
        -webkit-border-radius: 0 3px 3px 0;
        border-radius: 0 3px 3px 0;
    }

    .button-group .button {
        font-size: 13px;
        -moz-border-radius: 0;
        -webkit-border-radius: 0;
        border-radius: 0;
    }

    .button.large {
        padding: 12px 30px;
        text-transform: uppercase;
    }

    .button {
        position: relative;
        display: inline-block;
        zoom: 1;
        padding: 6px 20px;
        margin: 0;
        cursor: pointer;
        border: 1px solid #bbb;
        overflow: visible;
        font: bold 13px arial, helvetica, sans-serif;
        text-decoration: none;
        white-space: nowrap;
        color: #555;
        background-color: #ddd;
        transition: background-color 0.2s ease-out;
        background-clip: padding-box;
        -moz-border-radius: 3px;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        -moz-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3), 0 2px 2px -1px rgba(0, 0, 0, 0.5),
        0 1px 0 rgba(255, 255, 255, 0.3) inset;
        -webkit-box-shadow: 0 1px 0 rgb(0 0 0 / 30%), 0 2px 2px -1px rgb(0 0 0 / 50%),
        0 1px 0 rgb(255 255 255 / 30%) inset;
        box-shadow: 0 1px 0 rgb(0 0 0 / 30%), 0 2px 2px -1px rgb(0 0 0 / 50%),
        0 1px 0 rgb(255 255 255 / 30%) inset;
        text-shadow: 0 1px 0 rgb(255 255 255 / 90%);
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .button:hover {
        background-color: #eee;
        color: #555;
    }

    .button.large:active {
        top: 2px;
    }

    .button-group .button:active {
        -moz-box-shadow: 0 0 1px rgba(0, 0, 0, 0.2) inset,
        5px 0 5px -3px rgba(0, 0, 0, 0.2) inset,
        -5px 0 5px -3px rgba(0, 0, 0, 0.2) inset;
        -webkit-box-shadow: 0 0 1px rgb(0 0 0 / 20%) inset,
        5px 0 5px -3px rgb(0 0 0 / 20%) inset,
        -5px 0 5px -3px rgb(0 0 0 / 20%) inset;
        box-shadow: 0 0 1px rgb(0 0 0 / 20%) inset,
        5px 0 5px -3px rgb(0 0 0 / 20%) inset,
        -5px 0 5px -3px rgb(0 0 0 / 20%) inset;
    }

    .button-group li:first-child .button:active {
        -moz-box-shadow: 0 0 1px rgba(0, 0, 0, 0.2) inset,
        -5px 0 5px -3px rgba(0, 0, 0, 0.2) inset;
        -webkit-box-shadow: 0 0 1px rgb(0 0 0 / 20%) inset,
        -5px 0 5px -3px rgb(0 0 0 / 20%) inset;
        box-shadow: 0 0 1px rgb(0 0 0 / 20%) inset,
        -5px 0 5px -3px rgb(0 0 0 / 20%) inset;
    }

    .button-group li:last-child .button:active {
        -moz-box-shadow: 0 0 1px rgba(0, 0, 0, 0.2) inset,
        5px 0 5px -3px rgba(0, 0, 0, 0.2) inset;
        -webkit-box-shadow: 0 0 1px rgb(0 0 0 / 20%) inset,
        5px 0 5px -3px rgb(0 0 0 / 20%) inset;
        box-shadow: 0 0 1px rgb(0 0 0 / 20%) inset,
        5px 0 5px -3px rgb(0 0 0 / 20%) inset;
    }
</style>
