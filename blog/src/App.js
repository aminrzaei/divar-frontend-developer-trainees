import React, { useState, useEffect } from 'react';

// import ActionWidget from './components/ActionWidget';
// import NonActionWidget from './components/NonActionWidget';

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
        aria-hidden="true"
        onClick={() => {
          setNestedModal(null);
          setModal(null);
        }}
      >
        <div className="app-intro">
          {/* <ActionWidget/> */}
          {/* <NonActionWidget/> */}
          <RenderWidgets
            widgets={widgets}
            setModal={setModal}
            setNestedModal={setNestedModal}
          />
        </div>
        {modal ? (
          <div
            aria-hidden="true"
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="modal__close"
              aria-hidden="true"
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
          <div
            aria-hidden="true"
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="modal__back-button"
              aria-hidden="true"
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
