import React, { useState, useEffect } from 'react';

// import { actionWidget } from './components/actionWidget';
// import { nonActionWidget } from './components/nonActionWidget';

// eslint-disable-next-line no-unused-vars
import { WidgetService, ActionWidgetService } from './widget-service';
import RenderWidgets from './components/RenderWidgets';
import './App.scss';

function App() {
  const [widgets, setWidgets] = useState([]);
  const [modal, setModal] = useState(null);
  const [nestedModal, setNestedModal] = useState(null);

  useEffect(() => {
    (async () => {
      // const widgetServiceResult = await WidgetService();
      const actionWidgetServiceResult = await ActionWidgetService();
      setWidgets(actionWidgetServiceResult);
    })();
  }, []);

  if (widgets?.length) {
    return (
      <section
        className="app"
        onClick={() => {
          setNestedModal(null);
          setModal(null);
        }}
      >
        <div className="app-intro">
          {/* {actionWidget()} */}
          {/* {nonActionWidget()} */}
          <RenderWidgets
            widgets={widgets}
            setModal={setModal}
            setNestedModal={setNestedModal}
          />
        </div>
        {modal ? (
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div
              className="modal__close"
              onClick={() => {
                setModal(null);
              }}
            >
              بستن
            </div>
            {modal}
          </div>
        ) : null}
        {nestedModal ? (
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div
              className="modal__back-button"
              onClick={() => {
                setNestedModal(null);
              }}
            >
              بازگشت
            </div>
            {nestedModal}
          </div>
        ) : null}
      </section>
    );
  }
  return (
    <div className="app">
      <div className="loading">در حال بار گذاری ...</div>
    </div>
  );
}

export default App;
