import './App.css';

const widget = {
  widget_type: 'FEATURE_ROW',
  data: {
    title: 'بررسی فنی بیش از <b>۴۰۰</b> نقطه‌ خودرو',
    image_url: 'https://s100.divarcdn.com/static/icons/4/ic_checked.png',
    image_color: 'SUCCESS_PRIMARY',
    has_divider: true,
    icon: {
      image_url_dark:
        'https://s100.divarcdn.com/static/imgs/widget-icons/dark/success_primary/checked.png',
      image_url_light:
        'https://s100.divarcdn.com/static/imgs/widget-icons/light/success_primary/checked.png',
      icon_name: 'CHECKED',
      icon_color: 'SUCCESS_PRIMARY',
    },
  },
};

const actionWidget = {
  widget_type: 'SCORE_ROW',
  data: {
    title: 'بدنه',
    percentage_score: 88,
    score_color: 'SUCCESS_PRIMARY',
    image_url: 'https://s100.divarcdn.com/static/icons/4/ic_vehicles.png',
    image_color: 'ICON_SECONDARY',
    action: {
      type: 'SHOW_INSPECTION_ITEM',
      payload: {
        type: 'type1',
        slug: 'YmFkYW5l',
      },
    },
    has_divider: true,
    icon: {
      image_url_dark:
        'https://s100.divarcdn.com/static/imgs/widget-icons/dark/icon_secondary/car_body.png',
      image_url_light:
        'https://s100.divarcdn.com/static/imgs/widget-icons/light/icon_secondary/car_body.png',
      icon_name: 'CAR_BODY',
      icon_color: 'ICON_SECONDARY',
    },
  },
};

const actionResponse = {
  widget_type: 'DESCRIPTION_ROW',
  data: {
    title: 'بدنه',
    text:
      'کاپوت سنگ خوردگی دارد. به دلیل وجود فلاپ امکان بررسی رکاب ها وجود ندارد.',
    has_divider: true,
  },
};

const renderPercentage = (percentage) => {
  return (
    <div className="action-widget-row__percentage">
      <div className="action-widget-row__bar">
        <div
          className="action-widget-row__bar-level"
          style={{ width: `${percentage}%` }}
        ></div>
        <span className="action-widget-row__block"></span>
        <span className="action-widget-row__block"></span>
        <span className="action-widget-row__block"></span>
        <span className="action-widget-row__block"></span>
        <span className="action-widget-row__block"></span>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-intro">
        <div className="widget-row">
          <img
            src={widget.data.icon.image_url_light}
            className="widget-row__icon"
            alt={widget.data.icon.icon_name}
          />
          <div
            className="widget-row__title"
            dangerouslySetInnerHTML={{ __html: `${widget.data.title}` }}
          ></div>
        </div>

        <div className="action-widget-row">
          <img
            src={actionWidget.data.icon.image_url_light}
            className="action-widget-row__icon"
            alt={actionWidget.data.icon.icon_name}
          />
          <div
            className="action-widget-row__title"
            dangerouslySetInnerHTML={{ __html: `${actionWidget.data.title}` }}
          ></div>
          {renderPercentage(actionWidget.data.percentage_score)}
        </div>

        <div className="description-row">
          <p className="description-row__title">{actionResponse.data.title} </p>
          <div className="description-row__text">
            {actionResponse.data.text}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
