<template>
    <select
            v-model="modelValue"
            @change="$emit('update:modelValue', modelValue)">

        <option disabled value="">Choose from the list</option>

        <option :value="option.value"
                v-for="option in options"
                value="{{option.value}}">
            {{option.name}}
        </option>
    </select>
</template>

<script>
    export default {
        name: "main-select",

        props: {
            modelValue: {
                type: String
            },
            options: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style scoped>

</style>