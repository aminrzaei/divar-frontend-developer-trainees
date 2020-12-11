import React from 'react';
import Modal from './Modal';
import { percentageBar } from './percentageBar';

const RenderWidgets = (props) => {
  return props.widgets.map((widget, idx) => {
    switch (widget.widget_type) {
      case 'TITLE_ROW':
        return (
          <div className="title-row" key={idx}>
            {widget.data.text}
          </div>
        );
      case 'UNEXPANDABLE_ROW':
        return (
          <div className="unexpandable-row" key={idx}>
            <span className="unexpandable-row__title">
              {' '}
              {widget.data.title}
            </span>
            <span className="unexpandable-row__value">{widget.data.value}</span>
          </div>
        );
      case 'SECTION_DIVIDER_ROW':
        return <div className="section-divider-row" key={idx}></div>;
      case 'SCORE_ROW':
        return (
          <div
            className="action-widget-row"
            key={idx}
            onClick={() => {
              props.setModal(
                <Modal
                  content={widget.data.action.payload.widget_list}
                  setNestedModal={props.setNestedModal}
                />
              );
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
      default:
        return null;
    }
  });
};

export default RenderWidgets;
