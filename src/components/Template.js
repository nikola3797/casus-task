import React from 'react';
import PropTypes from 'prop-types';
import dummyPreview from '../assets/icon/dummyPreview.svg'

export default function Template({template: {id, title, date, state}}) {
    return (
        <div></div>
    );
}

Template.propTypes = {
    /** Composition of the task */
    template: PropTypes.shape({
        /** Id of the task */
        id: PropTypes.string.isRequired,
        /** Title of the task */
        title: PropTypes.string.isRequired,
        /** Date of the task **/
        date: PropTypes.string.isRequired,
        /** Current state of the task */
        state: PropTypes.string.isRequired,
    }),
};