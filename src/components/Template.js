import React from 'react';
import PropTypes from 'prop-types';
import casusLogo from '../assets/icon/casus.svg'
import moment from 'moment'
import Loader from './Loader';

export default function Template({template: {id, title, date}}) {
    return (
        <div
            key={id}
            className={"template-item"}
        >
            <div>
            <Loader width={60} />
            <Loader width={40} />
            <Loader width={70} />
            <Loader width={65} />
            <Loader width={60} />
            <Loader width={40} />
            </div>
            <div className={"template-bottom-part"}>
            <span className={"template-title"}>{title}</span>
            <div className={"template-minutes"}>
                <div className={"template-img"}>
                    <img src={casusLogo} />
                </div>
                <span>{moment(date).fromNow()}</span>
            </div>
            </div>
        </div>
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
    }),
};