<template>
    <input type="text" :value="modelValue" @input="updateInput"/>
</template>

<script>
    export default {
        name: "main-input",
        props: {
            modelValue: [String, Number],
        },
        methods: {
            updateInput(event) {
                this.$emit("update:modelValue", event.target.value);
            },
        },
    };
</script>

<style scoped>
    input {
        width: 100%;
        border: 2px solid #aaa;
        border-radius: 4px;
        margin: 8px 0;
        outline: none;
        padding: 8px;
        box-sizing: border-box;
        transition: 0.3s;
        font-size: 14px;
        min-width: 320px;
    }

    input:focus {
        border-color: dodgerBlue;
        box-shadow: 0 0 8px 0 dodgerBlue;
    }

    input.alert,
    input.alert:focus {
        border-color: rgba(255, 0, 0, 0.67);
        box-shadow: 0 0 8px 0 rgba(255, 0, 0, 0.7);
    }
</style>
