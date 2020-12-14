import React from 'react';
import { NonActionwidgetJson } from '../widgets';

const nonActionWidget = () => (
  <div className="widget-row">
    <img
      src={NonActionwidgetJson.data.icon.image_url_light}
      className="widget-row__icon"
      alt={NonActionwidgetJson.data.icon.icon_name}
    />
    <div
      className="widget-row__title"
      dangerouslySetInnerHTML={{
        __html: `${NonActionwidgetJson.data.title}`,
      }}
    />
  </div>
);

export default nonActionWidget;
