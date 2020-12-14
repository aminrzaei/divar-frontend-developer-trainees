import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import Modal from './Modal';
import PercentageBar from './PercentageBar';

const RenderWidgets = (props) =>
  props.widgets.map((widget) => {
    switch (widget.widget_type) {
      case 'TITLE_ROW':
        return (
          <div className="title-row" key={uuidv4()}>
            {widget.data.text}
          </div>
        );
      case 'UNEXPANDABLE_ROW':
        return (
          <div className="unexpandable-row" key={uuidv4()}>
            <span className="unexpandable-row__title">{widget.data.title}</span>
            <span className="unexpandable-row__value">{widget.data.value}</span>
          </div>
        );
      case 'SECTION_DIVIDER_ROW':
        return <div className="section-divider-row" key={uuidv4()} />;
      case 'SCORE_ROW':
        return (
          <div
            className="action-widget-row"
            key={uuidv4()}
            onClick={(e) => {
              e.stopPropagation();
              props.setModal(
                <Modal
                  content={widget.data.action.payload.widget_list}
                  setNestedModal={props.setNestedModal}
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
            {PercentageBar(widget.data.percentage_score)}
            <div className="action-widget-row__arrow">{`>`}</div>
          </div>
        );
      default:
        return null;
    }
  });
export default RenderWidgets;
