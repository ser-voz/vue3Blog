<template>
    <div class="pagination"  v-if="paginationCount > 1">
        <ul>
            <li
                :class="{
                    'disabled' : currentPage  <= 1
                }"
                @click="$emit('pageNum', 'pageMinus')">
                Back
            </li>
            <li
                v-for="pageNum in paginationCount"
                :key="pageNum"
                @click="$emit('pageNum', pageNum)"
                :class="{
                    'current': currentPage === pageNum
                }">
                {{ pageNum }}
            </li>
            <li
                :class="{
                    'disabled' : hasNextPage
                }"
                @click="$emit('pageNum', 'pagePlus')">
                Next
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "pagination-nav",

        props: {
            paginationCount: {
                type: Number,
                require: true,
            },
            currentPage: {
                type: Number
            }
        },

        computed: {
            hasNextPage() {
                return (this.currentPage + 1) > this.paginationCount;
            }
        }
    }
</script>

<style scoped>
    .pagination {
        margin-top: 30px;
    }

    .pagination li {
        position: relative;
        margin-right: 5px;
        display: inline-block;
        padding: 10px;
        cursor: pointer;
        border: 1px solid #bbb;
        font: bold 16px arial, helvetica, sans-serif;
        text-decoration: none;
        color: #555;
        background-color: #ddd;
        transition: background-color 0.2s ease-out;
        border-radius: 3px;
        text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);
        box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3), 0 2px 2px -1px rgba(0, 0, 0, 0.3),
        0 1px 0 rgba(255, 255, 255, 0.3) inset;
    }

    .pagination li:active {
        top: 2px;
    }

    .pagination li:hover {
        background: #fff;
    }

    .pagination .current {
        background: #fff;
        color: #000;
    }
    .pagination li.disabled {
        pointer-events: none;
        opacity: .7;
    }
</style>