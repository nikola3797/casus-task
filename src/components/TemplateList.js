import React from 'react';
import PropTypes from 'prop-types';

import Template from './Template';

import { useDispatch, useSelector } from 'react-redux';
// import { updateTemplateState } from '../lib/store';


export function PureTemplateList({ loading, templates }) {
    const events = {};

    const LoadingRow = (
        <div className="loading-item">
            <span className="glow-checkbox" />
            <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
        </div>
    );
    if (loading) {
        return (
            <div className="list-items">
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
            </div>
        );
    }
    if (templates.length === 0) {
        return (
            <div className="list-items">
                <div className="wrapper-message">
                    <span className="icon-check" />
                    <div className="title-message">You have no templates</div>
                    <div className="subtitle-message">Sit back and relax</div>
                </div>
            </div>
        );
    }
    // const tasksInOrder = [
    //     ...tasks.filter(t => t.state === 'TASK_PINNED'),
    //     ...tasks.filter(t => t.state !== 'TASK_PINNED'),
    // ];
    // const templatesInOrder = templates;
    return (
        <div className="list-items">
            {templates.map(template => (
                <Template key={template.id} template={template} {...events} />
            ))}
        </div>
    );
}

PureTemplateList.propTypes = {
    /** Checks if it's in loading state */
    loading: PropTypes.bool,
    /** The list of tasks */
    templates: PropTypes.arrayOf(Template.propTypes.template).isRequired,
    /** Event to change the task to pinned */
    // onPinTask: PropTypes.func.isRequired,
    /** Event to change the task to archived */
    // onArchiveTask: PropTypes.func.isRequired,
};

PureTemplateList.defaultProps = {
    loading: false,
};

export function TemplateList() {
    // We're retrieving our state from the store
    // const tasks = useSelector(state => state.tasks);
    const templates = useSelector(state => state.templates)
    // // We're defining an variable to handle dispatching the actions back to the store
    // // const dispatch = useDispatch();
    //
    // const pinTask = value => {
    //     // We're dispatching the Pinned event back to our store
    //     dispatch(updateTaskState({ id: value, newTaskState: 'TASK_PINNED' }));
    // };
    // const archiveTask = value => {
    //     // We're dispatching the Archive event back to our store
    //     dispatch(updateTaskState({ id: value, newTaskState: 'TASK_ARCHIVED' }));
    // };
    //
    // const filteredTasks = tasks.filter(t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED');
    // const filteredTemplates = templates;
    return (
        <PureTemplateList
            templates={templates}
            // onPinTask={task => pinTask(task)}
            // onArchiveTask={task => archiveTask(task)}
        />
    );
}