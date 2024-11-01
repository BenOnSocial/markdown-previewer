import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import Editor from './Editor';
import './index.css';
import store from './store';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Editor />
  </Provider>
);
