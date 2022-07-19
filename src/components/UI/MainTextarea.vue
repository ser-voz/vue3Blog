<template>
  <textarea
          cols="30"
          :value="modelValue"
          @input="updateTextarea"
          rows="10"
  ></textarea>
</template>

<script>
    export default {
        name: "main-textarea",
        props: {
            modelValue: [String, Number],
        },
        methods: {
            updateTextarea(event) {
                this.$emit("update:modelValue", event.target.value);
            },
        },
        emit: {
            "update:modelValue": (value) => typeof value === "string",
        },
    };
</script>

<style scoped>
    textarea {
        width: 100%;
        border: 2px solid #aaa;
        border-radius: 4px;
        margin: 8px 0;
        outline: none;
        padding: 8px;
        transition: 0.3s;
        resize: none;
    }

    textarea:focus {
        border-color: dodgerBlue;
        box-shadow: 0 0 8px 0 dodgerBlue;
    }

    textarea.alert:focus,
    textarea.alert {
        border-color: rgba(255, 0, 0, 0.67);
        box-shadow: 0 0 8px 0 rgba(255, 0, 0, 0.7);
    }
</style>
