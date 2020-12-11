import React from 'react';

const NestedModal = (props) => {
  return props.content.map((widget, idx) => {
    switch (widget.widget_type) {
      case 'FEATURE_ROW':
        return <div>FEATURE_ROW</div>;
      case 'LEGEND_TITLE_ROW':
        return <div>LEGEND_TITLE_ROW</div>;
      default:
        return null;
    }
  });
};

export default NestedModal;
