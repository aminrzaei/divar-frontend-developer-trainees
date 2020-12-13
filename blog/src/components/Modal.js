import React from 'react';
import NestedModal from './NestedModal';
import { percentageBar } from './percentageBar';

const Modal = (props) => {
  return props.content.map((widget, idx) => {
    switch (widget.widget_type) {
      case 'TITLE_ROW':
        return (
          <div className="title-row" key={idx}>
            {widget.data.text}
          </div>
        );
      case 'SCORE_ROW':
        if (widget.data.action) {
          return (
            <div
              className="action-widget-row"
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                props.setNestedModal(
                  <NestedModal
                    content={widget.data.action.payload.widget_list}
                  />
                );
              }}
            >
              <img
                src={widget.data.icon.image_url_light}
                className="action-widget-row__icon"
                alt={widget.data.icon.icon_name}
              />
              <p
                className="action-widget-row__title"
                dangerouslySetInnerHTML={{ __html: `${widget.data.title}` }}
              ></p>
              {percentageBar(widget.data.percentage_score)}
              <div className="action-widget-row__arrow">{`>`}</div>
            </div>
          );
        }
        return (
          <div className="action-widget-row" key={idx}>
            <p
              className="action-widget-row__title"
              dangerouslySetInnerHTML={{ __html: `${widget.data.title}` }}
            ></p>
            <div>{widget.data.descriptive_score}</div>
          </div>
        );

      case 'IMAGE_CAROUSEL_ROW':
        return (
          <img
            key={idx}
            src={widget.data.items[0].image_url}
            alt=""
            className="modal__img"
          />
        );
      case 'FEATURE_ROW':
        return (
          <div key={idx} className="action-widget-feature">
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
          <div key={idx} className="action-widget-legend">
            {widget.data.title}
          </div>
        );
      default:
        return null;
    }
  });
};
export default Modal;
