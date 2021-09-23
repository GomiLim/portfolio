import { createBrowserHistory } from 'history';

const browserHistory = createBrowserHistory();

export const historyPush = (targetUrl) => {
  browserHistory.push(targetUrl);
};

export const historyReplace = (targetUrl) => {
  browserHistory.replace(targetUrl);
};
