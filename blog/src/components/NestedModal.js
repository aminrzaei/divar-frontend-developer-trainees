import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const NestedModal = (props) =>
  props.content.map((widget) => {
    switch (widget.widget_type) {
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
export default NestedModal;
