// server port changed to 3001 for prevent conflict with webpack server
const API_URL = 'http://localhost:3001/api/v1/widgets';

export const WidgetService = async () => {
  const data = await fetch(API_URL);
  const result = await data.json();
  return result;
};

export const ActionWidgetService = async () => {
  const data = await fetch(`${API_URL}/actions`);
  const result = await data.json();
  return result;
};
