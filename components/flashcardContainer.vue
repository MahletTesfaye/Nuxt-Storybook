<template>
    <div class="sm:w-3/4 m-[7%]">
        <div class="flex flex-col justify-between mb-7 w-full">
            <div class="flex justify-between sm:items-center mb-3 flex-col sm:flex-row">
                <h1 class="text-2xl sm:text-4xl font-extrabold mb-2">
                    Question & Answer <span class="text-[var(--backgroundPrimary)] orange_color">Flashcards</span>
                </h1>
                <Button />
            </div>
            <div class="flex flex-col sm:flex-row justify-between gap-5 sm:gap-0 w-full">
                <p class="">Flip or click the flashcards to view the answer.</p>
                <div class="flex justify-between items-center sm:gap-5">
                    <Dropdown :categories="categories" @category-change="handleCategoryChange" />
                    <div @click="handleShuffle" size="24" class="cursor-pointer hover:scale-110 align-center">
                        <i class="fas fa-random"></i>
                    </div>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-14 gap-y-16">
            <ClientOnly>
                <Flashcard v-for="(item, index) in displayedCards" :key="item.id" :data="item" />
            </ClientOnly>
        </div>

        <div v-if="filteredCards.length > displayedCards.length"
            class="w-full flex justify-center text-[var(--backgroundSecondary)]">
            <div @click="handleShowMore" class="py-8 flex items-center cursor-pointer">
                <div class="font-semibold">{{ isShowMore ? 'Show less' : 'Show more' }}</div>
                <span :class="isShowMore ? 'rotate-180' : ''">
                    <i class="fas fa-chevron-down" style="transition: transform 0.3s;"></i>
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import Flashcard from '../components/flashcard.vue';
import Dropdown from '../components/dropdown.vue';
import { flashcardsData } from '../data/flashcards';

defineProps({
    categories: {
        type: Array,
        default: () => ['All Cards', 'Math', 'Science', 'History'],
    },
    itemsToShow: {
        type: Number,
        default: 6,
    },
    selectedCategory: {
        type: String,
        default: 'All Cards',
    },
    isShuffled: {
        type: Boolean,
        default: false,
    },
    isShowMore: {
        type: Boolean,
        default: false,
    },
});

const cards = ref([]);
const filteredCards = ref([]);
const shuffled = ref([]);
const isShowMore = ref(false);
const itemsToShow = ref(6);
const categories = ref([]);
const selectedCategory = ref('All Cards');

const displayedCards = computed(() => {
    if (isShowMore.value) {
        return shuffled.value;
    } else {
        return shuffled.value.slice(0, itemsToShow.value);
    }
});

onMounted(() => {
    cards.value = flashcardsData;

    const uniqueCategories = [...new Set(flashcardsData.map((card) => card.category))];
    categories.value = uniqueCategories;

    filteredCards.value = cards.value;
    shuffled.value = [...cards.value];
});

const handleShuffle = () => {
    shuffled.value = [...filteredCards.value].sort(() => Math.random() - 0.5);
};

const handleCategoryChange = async (category) => {
    if (category === 'All Cards') {
        filteredCards.value = cards.value;
    } else {
        filteredCards.value = cards.value.filter((card) => card.category === category);
    }
    shuffled.value = [...filteredCards.value];
};

const handleShowMore = () => {
    isShowMore.value = !isShowMore.value;
};
</script>
