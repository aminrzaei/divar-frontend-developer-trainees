import React from 'react';
import PropTypes from 'prop-types';

const PercentageBar = (props) => {
  const { score } = props;
  return (
    <div className="action-widget-row__percentage">
      <div className="action-widget-row__bar">
        <div
          className="action-widget-row__bar-level"
          style={{
            width: `${score}%`,
            backgroundColor: score > 60 ? 'green' : 'orange',
          }}
        >
          {' '}
        </div>
        <span className="action-widget-row__block"> </span>
        <span className="action-widget-row__block"> </span>
        <span className="action-widget-row__block"> </span>
        <span className="action-widget-row__block"> </span>
        <span className="action-widget-row__block"> </span>
      </div>
    </div>
  );
};

PercentageBar.propTypes = {
  score: PropTypes.number.isRequired,
};

export default PercentageBar;
