import {Task} from "./Task";
import {Meta, StoryObj} from "@storybook/react";
import {action} from "@storybook/addon-actions";


const meta: Meta<typeof Task> = {
    title: "Task",
    component: Task,
    tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof Task>;

const changeTaskStatusCallBack = action("Status Changed");
const changeTaskTitleCallBack = action("Title changed");
const removeTaskCallBack = action("Task removed");

export const TaskExample: Story = {
    args: {
        task: {id: "1", isDone: true, title: "CSS"},
        changeTaskStatus: (changeTaskStatusCallBack),
        changeTaskTitle: (changeTaskTitleCallBack),
        removeTask: (removeTaskCallBack),
        todolistId: "todolistId1",

    }
};

export const TaskExample2: Story = {
    args: {
        task: {id: "2", isDone: false, title: "JS"},
        changeTaskStatus: (changeTaskStatusCallBack),
        changeTaskTitle: (changeTaskTitleCallBack),
        removeTask: (removeTaskCallBack),
        todolistId: "todolistId2",
    }
};
