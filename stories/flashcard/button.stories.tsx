import type { Meta, StoryObj } from '@storybook/vue3';
import { h } from 'vue';
import MyButton from '@/components/button.vue';

const meta: Meta<typeof MyButton> = {
    title: 'Components/MyButton',
    component: MyButton,
    argTypes: {
        type: {
            control: {
                type: 'select',
                options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info'],
            },
            description: 'The type of the button',
        },
    },
    parameters: {
        docs: {
            description: {
                story: `Type: \`primary\`, \`secondary\`, \`success\`, \`warning\`, \`danger\`, and \`info\`. The displayed text on the button will dynamically change based on the selected type.`,
            },
        },
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/Jim0jOse1dI0DJkNkYRDyR/QA-flashcard?node-id=2275-942&node-type=symbol&t=AU9RvEwb8DP848wB-0',
        },
    },
};

export default meta;

type Story = StoryObj<typeof MyButton>;

const renderButton = (args: any) => ({
    components: { MyButton },
    setup() {
        return { args };
    },
    render() {
        return h(MyButton, {
            key: args.type,
            type: args.type,
            onClick: args.onClick,
        }, {
            default: () => `${args.type.charAt(0).toUpperCase() + args.type.slice(1)} Button`,
        });
    },
});

export const Default: Story = {
    render: renderButton,
    args: {
        type: 'primary',
    },
};

export const Danger: Story = {
    render: renderButton,
    args: {
        type: 'danger',
    },
};

export const Success: Story = {
    render: renderButton,
    args: {
        type: 'success',
    },
};

export const CustomButton: Story = {
    render: renderButton,
    args: {
        type: 'warning',
    },
};
