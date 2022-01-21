import React from 'react';

import { PureTemplateList } from './TemplateList';
import * as TemplateStories from './Template.stories';

export default {
    component: PureTemplateList,
    title: 'TemplateList',
    decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
};

const Template = args => <PureTemplateList {...args} />;

export const Default = Template.bind({});
Default.args = {
    // Shaping the stories through args composition.
    // The data was inherited from the Default story in task.stories.js.
    templates: [
        { ...TemplateStories.Default.args.template, id: '1', title: 'Task 1', date: new Date() },
        { ...TemplateStories.Default.args.template, id: '2', title: 'Task 2', date: new Date() },
        { ...TemplateStories.Default.args.template, id: '3', title: 'Task 3', date: new Date() },
        { ...TemplateStories.Default.args.template, id: '4', title: 'Task 4', date: new Date() },
        { ...TemplateStories.Default.args.template, id: '5', title: 'Task 5', date: new Date() },
        { ...TemplateStories.Default.args.template, id: '6', title: 'Task 6', date: new Date() },
    ],
};



export const Loading = Template.bind({});
Loading.args = {
    templates: [],
    loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
    // Shaping the stories through args composition.
    // Inherited data coming from the Loading story.
    ...Loading.args,
    loading: false,
};