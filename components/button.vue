<template>
    <div>
        <el-button :type="type" @click="handleClick">Element plus button</el-button>
    </div>
</template>

<script setup>
const props = defineProps({
    type: {
        type: String,
        default: 'primary',
    },
});
const handleClick = () => {
    alert('Button clicked!');
};
</script>
