<template>
    <div
            class="modal"
            :class="[{ 'not-ready': !show }, { show: show }]"
            @click="$emit('update:show', false)"
    >
        <div class="modal-content" @click.stop>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "modal-window",
        props: {
            show: {
                type: Boolean,
                default: false,
            },
        }
    };
</script>

<style scoped>
    .not-ready {
        display: none;
    }

    .modal {
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.6);
        transition: all 0.3s ease;
        opacity: 0;
        visibility: hidden;
    }

    .modal.show {
        opacity: 1;
        visibility: visible;
    }

    .modal-content {
        background: #f9f9f9;
        padding: 15px;
        border-radius: 3px;
        min-width: 400px;
        transition: all 0.3s ease;
    }
</style>
