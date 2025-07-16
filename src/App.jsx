import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/portfolio';
import Overview from './pages/overview';
import Layout from './pages/layout';
import Details from './pages/details';
import Order from './pages/order';
import Index from './pages/index';
import StockBlog from './pages/stockBlog';
import Login from './pages/login';
import Signup from './pages/signup';
import SpaceX from './pages/spacex';

import Watchlist from './pages/watchlist';
import Blog from './pages/blog';
import NeuralinkBlog from './pages/nerualinkBlog';
import Starlink from './pages/starlink';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Index />} />
          <Route path="order" element={<Order />} />

        <Route path="/" element={<Layout />}>
           
          <Route path="overview" element={<Overview />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="details/:stockname" element={<Details />} />
          <Route path="watchlist" element={<Watchlist />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="blog/:stockname" element={<Blog />} />
          <Route path="spaceX/:stockname" element={<SpaceX />} />
          <Route path="neuralink/:stockname" element={<NeuralinkBlog />} />
          <Route path='starlink/:stockname' element ={<Starlink/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;