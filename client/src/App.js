import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home/Home';
import Auth from './components/Auth/Auth';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';
import Projects from './components/Pages/Projects/Projects';
import AboutUs from './components/Pages/AboutUs/AboutUs'

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
           <Route path="/" exact component={() => <Redirect to="/home" />} />
          <Route path="/home" exact component={Home} />
          <Route exact path ="/posts" exact component ={Projects}/>
          <Route exact path ="/aboutUs" exact component= {AboutUs}/>
          <Route path="/posts/search" exact component={Projects} />
          <Route path="/posts/:id" exact component={PostDetails} />
          <Route path={['/creators/:name', '/tags/:name']} component={CreatorOrTag} />
          <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
