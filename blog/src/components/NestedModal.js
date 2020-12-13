import React from 'react';

const NestedModal = (props) => {
  return props.content.map((widget, idx) => {
    switch (widget.widget_type) {
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

export default NestedModal;
