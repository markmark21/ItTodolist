import React from 'react';
import AppWithRedux from "./AppWithRedux";
import {Meta, StoryObj} from "@storybook/react";
import {Provider} from "react-redux";
import {store} from "./state/store";
import {ReduxStoreProviderDecorator} from "./stories/decorators/ReduxStoreProviderDecorator";


const meta: Meta<typeof AppWithRedux> = {
    title: 'AppWithRedux',
    component: AppWithRedux,
    decorators: [ReduxStoreProviderDecorator]
}

export default meta;

type Story = StoryObj<typeof AppWithRedux>;

export const AppWithReduxExample: Story = {}