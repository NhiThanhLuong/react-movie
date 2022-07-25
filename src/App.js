import 'swiper/swiper.min.css';
import '@/assets/boxicons-2.0.7/css/boxicons.min.css';
import '@/App.scss';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/redux/store';

import Header from '@/components/header/Header';
import Footer from '@/components/footer';

import Routes from '@/config/Routes';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
