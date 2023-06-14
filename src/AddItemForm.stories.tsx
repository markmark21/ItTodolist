import {AddItemForm} from "./AddItemForm";
import {Meta, StoryObj} from "@storybook/react";
import {action} from '@storybook/addon-actions'


const meta: Meta<typeof AddItemForm> = {
    title: 'AddItemForm',
    component: AddItemForm,
    tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof AddItemForm>;

const callBack = action('Button "add" was pressed')
export const AddItemFormExample: Story = {
    args: {
        addItem: (callBack)
    }
}