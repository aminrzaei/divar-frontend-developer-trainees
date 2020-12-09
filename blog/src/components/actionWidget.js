import { percentageBar } from './percentageBar';
import { actionWidgetJson, actionWidgetResponseJson } from '../jsons';

export const actionWidget = () => {
  return (
    <>
      <div className="action-widget-row">
        <img
          src={actionWidgetJson.data.icon.image_url_light}
          className="action-widget-row__icon"
          alt={actionWidgetJson.data.icon.icon_name}
        />
        <div
          className="action-widget-row__title"
          dangerouslySetInnerHTML={{ __html: `${actionWidgetJson.data.title}` }}
        ></div>
        {percentageBar(actionWidgetJson.data.percentage_score)}
      </div>

      <div className="description-row">
        <p className="description-row__title">
          {actionWidgetResponseJson.data.title}{' '}
        </p>
        <div className="description-row__text">
          {actionWidgetResponseJson.data.text}
        </div>
      </div>
    </>
  );
};
