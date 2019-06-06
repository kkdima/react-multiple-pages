import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import NotFoundPage from '../components/old/NotFoundPage';
// import Header from '../components/old/Header';
import HomePage from '../components/old/HomePage';
import ContactPage from '../components/old/ContactPage';
import PortfolioItemPage from '../components/old/PortfolioItemPage';
import PortfolioPage from '../components/old/PortfolioPage';

import { createGlobalStyle } from 'styled-components';


// import Home from '../components/Home/Home';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';
import Home from '../components/Home/Home';
import Product from '../components/other_pages/Product';
import Team from '../components/other_pages/Team';
import Blog from '../components/other_pages/Blog';
import Contact from '../components/other_pages/Contact';



const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/product" component={Product} exact={true} />
        {/* <Route path="/portfolio/:id" component={PortfolioItemPage} /> */}
        <Route path="/team" component={Team} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
