import React from 'react';
import PropTypes from 'prop-types';

function SupportSection({
    body,
    followMe,
    leaveReview,
    share,
    learnReact,
    contribute,
    donate
}) {

}

SupportSection.propTypes = {
  body: PropTypes.string.isRequired,
  followMe: PropTypes.string.isRequired,
  leavrReview: PropTypes.string.isRequired,
  share: PropTypes.string.isRequired,
  learnReact: PropTypes.string.isRequired,
  contribute: PropTypes.string.isRequired,
  donate: PropTypes.string.isRequired,
};

export default SupportSection;
