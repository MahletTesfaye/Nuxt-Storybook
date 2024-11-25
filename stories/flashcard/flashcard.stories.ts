import type { Meta, StoryObj } from '@storybook-vue/nuxt';
import Flashcard from '@/components/flashcard.vue';

const meta: Meta<typeof Flashcard> = {
    title: 'Components/Flashcard',
    component: Flashcard,
    argTypes: {
        data: {
            control: 'object',
            description: 'Data for the flashcard, including question and answer.',
        },
    },
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/Jim0jOse1dI0DJkNkYRDyR/QA-flashcard?node-id=2009-347&node-type=instance&t=iZiJjTB2r1lp37Zw-0',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Flashcard>;

export const Default: Story = {
    args: {
        data: {
            question: 'What is React?',
            answer: 'React is a JavaScript library for building user interfaces.',
        },
    },
};

