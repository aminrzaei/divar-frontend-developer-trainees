import React from 'react';

import PercentageBar from './PercentageBar';
import { ActionWidgetJson, ActionWidgetResponseJson } from '../widgets';

const ActionWidget = () => (
  <>
    <div className="action-widget-row">
      <img
        src={ActionWidgetJson.data.icon.image_url_light}
        className="action-widget-row__icon"
        alt={ActionWidgetJson.data.icon.icon_name}
      />
      <div
        className="action-widget-row__title"
        dangerouslySetInnerHTML={{ __html: `${ActionWidgetJson.data.title}` }}
      />
      <PercentageBar score={ActionWidgetJson.data.percentage_score} />
    </div>

    <div className="description-row">
      <p className="description-row__title">
        {ActionWidgetResponseJson.data.title}
      </p>
      <div className="description-row__text">
        {ActionWidgetResponseJson.data.text}
      </div>
    </div>
  </>
);

export default ActionWidget;
