import { nonActionwidgetJson } from '../jsons';

export const nonActionWidget = () => {
  return (
    <div className="widget-row">
      <img
        src={nonActionwidgetJson.data.icon.image_url_light}
        className="widget-row__icon"
        alt={nonActionwidgetJson.data.icon.icon_name}
      />
      <div
        className="widget-row__title"
        dangerouslySetInnerHTML={{
          __html: `${nonActionwidgetJson.data.title}`,
        }}
      ></div>
    </div>
  );
};
