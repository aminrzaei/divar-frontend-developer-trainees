import { percentageBar } from './percentageBar';

export const renderWidgets = (widgets) => {
  return widgets.map((widget) => {
    switch (widget.widget_type) {
      case 'TITLE_ROW':
        return <div>{widget.data.text}</div>;
      case 'UNEXPANDABLE_ROW':
        return (
          <div>
            {widget.data.title}
            {widget.data.value}
          </div>
        );
      case 'SECTION_DIVIDER_ROW':
        return <div>--------------------------------------------------</div>;
      case 'SCORE_ROW':
        return (
          <div className="action-widget-row">
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
          </div>
        );
      default:
        return null;
    }
  });
};
