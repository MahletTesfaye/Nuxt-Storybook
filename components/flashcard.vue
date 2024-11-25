<template>
    <div class="duration-500 hover:scale-105 cursor-pointer max:w-fit">
        <div @click="handleFlip" class="card relative" :class="{ cardFlip: isFlipped }">
            <div class="w-full card-front absolute top-0 self-center">
                <div
                    class="bg-gray-50 overflow-hidden shadow-md hover:shadow-lg border max-h-80 max-w-82 h-80 pt-3 px-3 rounded-2xl text-center flex flex1 flex-col justify-center items-center">
                    <div class="flex justify-end absolute right-3 top-3">
                        <div v-if="isClicked" @click.stop="speakAll" title="Mute">
                            <i class="fa fa-volume-up"></i>
                        </div>
                        <div v-else @click.stop="speakAll" title="Unmute">
                            <i class="fas fa-volume-down" aria-hidden="true"></i>
                        </div>
                    </div>
                    <span>
                        {{ data.question }}
                    </span>
                </div>
            </div>

            <div class="w-full card-back">
                <div
                    class="bg-gray-50 overflow-hidden shadow-md hover:shadow-lg  border max-h-80 max-w-82 w-full h-80 pt-3 px-3 rounded-2xl text-center flex flex-col justify-center items-center">
                    <div class="flex justify-end absolute right-3 top-3">
                        <div v-if="isClicked" @click.stop="speakAll" title="Mute"><i class="fa fa-volume-up"></i>
                        </div>
                        <div v-else @click.stop="speakAll" title="Unmute"><i class="fa fa-volume-down"></i></div>
                    </div>
                    <span>
                        {{ data.answer }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
});

const isFlipped = ref(false);
const isClicked = ref(false);

const handleFlip = () => {
    isFlipped.value = !isFlipped.value;
    if (import.meta.client && window.speechSynthesis) {
        window.speechSynthesis.cancel();
    }
    isClicked.value = false;
};

const speakText = (text) => {
    if (import.meta.client && window.speechSynthesis) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.onend = () => {
            isClicked.value = false;
        };
        if (isClicked.value) window.speechSynthesis.cancel();
        else window.speechSynthesis.speak(utterance);
    } else {
        alert('Text-to-speech is not supported in this browser!');
    }
};

const speakAll = (e) => {
    e.stopPropagation();
    isClicked.value = !isClicked.value;
    speakText(isFlipped.value ? props.data.answer : props.data.question);
};
</script>
