import type { Meta, StoryObj } from '@storybook/vue3';
import FlashcardContainer from '@/components/flashcardContainer.vue';

const meta: Meta<typeof FlashcardContainer> = {
    title: 'FlashcardContainer',
    component: FlashcardContainer,
    argTypes: {
        categories: {
            description: 'Array of categories for filtering flashcards.',
        },
        itemsToShow: {
            control: 'number',
            description: 'Number of items to display in the container.',
        },
        selectedCategory: {
            control: 'text',
            description: 'The selected category for filtering the flashcards.',
        },
        isShuffled: {
            control: 'boolean',
            description: 'Boolean to indicate if flashcards should be shuffled.',
        },
        isShowMore: {
            control: 'boolean',
            description: 'Boolean to control whether the "Show More" functionality is active.',
        },
    },
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/Jim0jOse1dI0DJkNkYRDyR/QA-flashcard?node-id=2045-944&node-type=frame&t=y0Zd7PBeV1unjYW2-0',
        },
    },
};

export default meta;

type Story = StoryObj<typeof FlashcardContainer>;

export const Default: Story = {
    args: {
        itemsToShow: 6,
    },
};

export const ShowMore: Story = {
    args: {
        isShowMore: true,
    },
};
