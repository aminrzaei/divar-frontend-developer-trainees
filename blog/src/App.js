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

  return (
    <div className="app">
      <div className="app-intro">
        {/* {actionWidget()} */}
        {/* {nonActionWidget()} */}
        {renderWidgets(widgets)}
      </div>
    </div>
  );
}

export default App;
