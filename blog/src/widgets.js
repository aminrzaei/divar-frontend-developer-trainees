export const NonActionwidgetJson = {
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

export const ActionWidgetJson = {
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

export const ActionWidgetResponseJson = {
  widget_type: 'DESCRIPTION_ROW',
  data: {
    title: 'بدنه',
    text:
      'کاپوت سنگ خوردگی دارد. به دلیل وجود فلاپ امکان بررسی رکاب ها وجود ندارد.',
    has_divider: true,
  },
};
