import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.tsx';
import GlobalStyle from './GlobalStyle.tsx';
import store from './redux/config/configStore.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);
