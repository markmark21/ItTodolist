import {EditableSpan} from "../EditableSpan";
import {Meta, StoryObj} from "@storybook/react";
import {action} from "@storybook/addon-actions";


const meta: Meta<typeof EditableSpan> = {
    title: 'EditableSpan',
    component: EditableSpan,
    tags: ['autodocs']
}

export default meta;

type Story = StoryObj<typeof EditableSpan>;

const changeCallBack = action('Value Changed')
export const EditableSpanBaseExample: Story = {
    args: {
        value: 'Start value',
        onChange: (changeCallBack)
    }
}