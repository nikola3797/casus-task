import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import TemplateList from '../components/TemplateList';


export function HomePage({ error }) {
    if (error) {
        return (
            <div className="page lists-show">
                <div className="wrapper-message">
                    <span className="icon-face-sad" />
                    <div className="title-message">Oh no!</div>
                    <div className="subtitle-message">Something went wrong</div>
                </div>
            </div>
        );
    }
    return (
        <div className="page lists-show">
            <nav>
                <h1 className="title-page">
                    <span className="title-wrapper">CASUS</span>
                </h1>
            </nav>
           <TemplateList />
        </div>
    );
}

HomePage.propTypes = {
    /** The error message */
    error: PropTypes.string,
};

HomePage.defaultProps = {
    error: null,
};

export function InboxScreen() {
    // We're retrieving the error field from our updated store
    const isError = useSelector(state => state.isError);

    return <HomePage error={isError} />;
}