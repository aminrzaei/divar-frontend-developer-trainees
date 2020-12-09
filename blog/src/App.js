import { useState, useEffect } from 'react';

// import { actionWidget } from './components/actionWidget';
// import { nonActionWidget } from './components/nonActionWidget';

import { WidgetService } from './widget-service';
import { renderWidgets } from './components/renderWidgets';
import './App.css';

function App() {
  const [widgets, setWidgets] = useState([]);

  useEffect(() => {
    (async () => {
      const widgetServiceResult = await WidgetService();
      setWidgets(widgetServiceResult);
    })();
  }, []);

  if (widgets?.length) {
    return (
      <div className="app">
        <div className="app-intro">
          {/* {actionWidget()} */}
          {/* {nonActionWidget()} */}
          {renderWidgets(widgets)}
        </div>
      </div>
    );
  } else {
    console.log('AMin');
  }
  return (
    <div className="app">
      <div className="loading">در حال بار گذاری ...</div>
    </div>
  );
}

export default App;
