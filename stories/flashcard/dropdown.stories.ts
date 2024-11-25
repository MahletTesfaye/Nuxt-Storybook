import type { Meta, StoryObj } from '@storybook/vue3';
import Dropdown from '@/components/dropdown.vue';

const meta: Meta<typeof Dropdown> = {
    title: 'Components/Dropdown',
    component: Dropdown,
    argTypes: {
        categories: {
            description: 'Array of categories to be displayed in the select dropdown.',
        },

    },
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/Jim0jOse1dI0DJkNkYRDyR/QA-flashcard?node-id=2029-1507&node-type=instance&t=y0Zd7PBeV1unjYW2-0',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
    args: {
        categories: ['Science', 'Math', 'History', "Book"],
    },
};

export const WithCategoryChange: Story = {
    args: {
        categories: ['Science', 'Math', 'History', 'Book'],
    },
    play: async ({ args, canvasElement }: any) => {
        const selectElement = canvasElement.querySelector('select');
        if (selectElement) {
            selectElement.value = 'Math';
            selectElement.dispatchEvent(new Event('change'));
        }
    },
};

export const EmptyCategory: Story = {
    args: {
        categories: [],
    },
};
