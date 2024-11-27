<template>
    <div class="flex justify-between items-center gap-5">
        <select @change="handleCategoryChange"
            class="border shadow rounded-md px-4 py-1 text-sm cursor-pointer bg-transparent focus:outline-none font-semibold">
            <option value="All Cards">All Cards</option>
            <option v-for="(category, index) in categories" :key="index" :value="category">{{ category }}</option>
        </select>
    </div>
</template>

<script setup>
const props = defineProps({
    categories: {
        type: Array,
        required: true,
    },
});

const emit = defineEmits(['category-change']);

const handleCategoryChange = (e) => {
    const category = e.target.value;
    emit('category-change', category);
};
</script>
