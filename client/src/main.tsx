
import App from './App.tsx'
import './index.css'

import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from '@store/index';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Provider>
)
