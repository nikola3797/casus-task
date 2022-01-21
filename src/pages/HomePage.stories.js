import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';

import {HomePage} from './HomePage';

// import * as TaskListStories from './TaskList.stories';

// A super-simple mock of a redux store
const Mockstore = configureStore({
    reducer: {},
});

export default {
    component: HomePage,
    decorators: [story => <Provider store={Mockstore}>{story()}</Provider>],
    title: 'HomePage',
};

const Template = args => <HomePage {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
    error: 'Something',
};
