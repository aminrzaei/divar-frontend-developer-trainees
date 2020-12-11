import React, { useState, useEffect } from 'react';

// import { actionWidget } from './components/actionWidget';
// import { nonActionWidget } from './components/nonActionWidget';

// eslint-disable-next-line no-unused-vars
import { WidgetService, ActionWidgetService } from './widget-service';
import RenderWidgets from './components/RenderWidgets';
import './App.scss';

function App() {
  const [widgets, setWidgets] = useState([]);
  const [modal, setModal] = useState();
  const [nestedModal, setNestedModal] = useState();

  useEffect(() => {
    (async () => {
      // const widgetServiceResult = await WidgetService();
      const actionWidgetServiceResult = await ActionWidgetService();
      setWidgets(actionWidgetServiceResult);
    })();
  }, []);

  if (widgets?.length) {
    return (
      <div className="app">
        <div className="app-intro">
          {/* {actionWidget()} */}
          {/* {nonActionWidget()} */}
          <RenderWidgets
            widgets={widgets}
            setModal={setModal}
            setNestedModal={setNestedModal}
          />
        </div>
        {modal}
        {nestedModal}
      </div>
    );
  }
  return (
    <div className="app">
      <div className="loading">در حال بار گذاری ...</div>
    </div>
  );
}

export default App;
