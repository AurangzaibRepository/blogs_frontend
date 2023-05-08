/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import ContentsSection from './ContentsSection';

function SupportSection({
  body,
  followMe,
  leaveReview,
  share,
  learnReact,
  contribute,
  donate,
}) {
  return (
    <>
      <ContentsSection
        titleClass="title text-center"
        title="You like my content? Here are a couple of ways to support it."
        contents={body}
      />
      <ContentsSection
        titleClass="sub-title"
        title="Follow Me"
        contents={followMe}
      />
      <ContentsSection
        titleClass="sub-title"
        title="Leave a Review"
        contents={leaveReview}
      />
      <ContentsSection
        titleClass="sub-title"
        title="Share"
        contents={share}
      />
      <ContentsSection
        titleClass="sub-title"
        title="Learn React"
        contents={learnReact}
      />
      <ContentsSection
        titleClass="sub-title"
        title="Contribute"
        contents={contribute}
      />
      <ContentsSection
        titleClass="sub-title"
        title="Donate"
        contents={donate}
      />
    </>
  );
}

SupportSection.propTypes = {
  body: PropTypes.string.isRequired,
  followMe: PropTypes.string.isRequired,
  leaveReview: PropTypes.string.isRequired,
  share: PropTypes.string.isRequired,
  learnReact: PropTypes.string.isRequired,
  contribute: PropTypes.string.isRequired,
  donate: PropTypes.string.isRequired,
};

export default SupportSection;
