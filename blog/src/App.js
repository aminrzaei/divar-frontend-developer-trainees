import './App.css';

// eslint-disable-next-line no-unused-vars
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
      </header>
    </div>
  );
}

export default App;
