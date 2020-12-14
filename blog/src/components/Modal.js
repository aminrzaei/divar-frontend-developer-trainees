import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import NestedModal from './NestedModal';
import PercentageBar from './PercentageBar';

const Modal = (props) =>
  props.content.map((widget) => {
    switch (widget.widget_type) {
      case 'TITLE_ROW':
        return (
          <div className="title-row" key={uuidv4()}>
            {widget.data.text}
          </div>
        );
      case 'SCORE_ROW':
        if (widget.data.action) {
          return (
            <div
              className="action-widget-row"
              key={uuidv4()}
              onClick={(e) => {
                e.stopPropagation();
                props.setNestedModal(
                  <NestedModal
                    content={widget.data.action.payload.widget_list}
                  />
                );
              }}
              aria-hidden="true"
            >
              <img
                src={widget.data.icon.image_url_light}
                className="action-widget-row__icon"
                alt={widget.data.icon.icon_name}
              />
              <p
                className="action-widget-row__title"
                dangerouslySetInnerHTML={{ __html: `${widget.data.title}` }}
              />
              {widget.data.percentage_score > 0 ? (
                <PercentageBar score={widget.data.percentage_score} />
              ) : null}

              <div className="action-widget-row__arrow">{`>`}</div>
            </div>
          );
        }
        return (
          <div className="action-widget-row" key={uuidv4()}>
            <p
              className="action-widget-row__title"
              dangerouslySetInnerHTML={{ __html: `${widget.data.title}` }}
            />
            <div>{widget.data.descriptive_score}</div>
          </div>
        );

      case 'IMAGE_CAROUSEL_ROW':
        return (
          <img
            key={uuidv4()}
            src={widget.data.items[0].image_url}
            alt=""
            className="modal__img"
          />
        );
      case 'FEATURE_ROW':
        return (
          <div key={uuidv4()} className="action-widget-feature">
            <img
              className="action-widget-feature__icon"
              src={widget.data.icon.image_url_light}
              alt=""
            />
            <p className="action-widget-feature__title">{widget.data.title}</p>
          </div>
        );
      case 'LEGEND_TITLE_ROW':
        return (
          <div key={uuidv4()} className="action-widget-legend">
            {widget.data.title}
          </div>
        );
      default:
        return null;
    }
  });

Modal.propTypes = {
  content: PropTypes.arrayOf(PropTypes.any).isRequired,
  setNestedModal: PropTypes.func.isRequired,
};

export default Modal;
