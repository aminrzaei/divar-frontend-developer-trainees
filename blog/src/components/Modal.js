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
        return (
          <div
            className="action-widget-row"
            key={idx}
            onClick={() => {
              if (widget.data.action) {
                props.setNestedModal(
                  <NestedModal
                    content={widget.data.action.payload.widget_list}
                  />
                );
              }
            }}
          >
            <img
              src={widget.data.icon.image_url_light}
              className="action-widget-row__icon"
              alt={widget.data.icon.icon_name}
            />
            <div
              className="action-widget-row__title"
              dangerouslySetInnerHTML={{ __html: `${widget.data.title}` }}
            ></div>
            {percentageBar(widget.data.percentage_score)}
            <div className="action-widget-row__arrow">{`>`}</div>
          </div>
        );
      case 'IMAGE_CAROUSEL_ROW':
        return <div>IMAGE_CAROUSEL_ROW</div>;
      case 'FEATURE_ROW':
        return <div>FEATURE_ROW</div>;
      case 'LEGEND_TITLE_ROW':
        return <div>LEGEND_TITLE_ROW</div>;
      default:
        return null;
    }
  });
};
export default Modal;
