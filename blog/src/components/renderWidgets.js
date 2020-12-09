import { percentageBar } from './percentageBar';

export const renderWidgets = (widgets) => {
  return widgets.map((widget) => {
    switch (widget.widget_type) {
      case 'TITLE_ROW':
        return <div className="title-row">{widget.data.text}</div>;
      case 'UNEXPANDABLE_ROW':
        return (
          <div className="unexpandable-row">
            <span className="unexpandable-row__title">
              {' '}
              {widget.data.title}
            </span>
            <span className="unexpandable-row__value">{widget.data.value}</span>
          </div>
        );
      case 'SECTION_DIVIDER_ROW':
        return <div className="section-divider-row"></div>;
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
            <div className="action-widget-row__arrow">{`>`}</div>
          </div>
        );
      default:
        return null;
    }
  });
};
