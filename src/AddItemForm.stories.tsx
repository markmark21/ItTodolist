import {AddItemForm} from "./AddItemForm";
import {Meta, StoryObj} from "@storybook/react";


const meta: Meta<typeof AddItemForm> = {
    title: 'AddItemForm',
    component: AddItemForm
}

export default meta;

type Story = StoryObj<typeof AddItemForm>;

export const AddItemFormExample: Story = {
    args: {
        addItem: (title) => {alert(title)}
    }
}