import React, { Component, Suspense } from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, withRouter, BrowserRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
//import ProfileContainer from './components/Profile/ProfileContainer';
import Preloader from './components/common/Preloader/Preloader';
import Login from './components/Login/Login';
import { connect, Provider } from 'react-redux';
import { initializeApp } from "./redux/app-reducer";
import { compose } from 'redux';
import store from './redux/redux-store';
import { withSuspense } from './hoc/WithSuspense';


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
//import DialogsContainer from './components/Dialogs/DialogsContainer';


class App extends Component {
   componentDidMount() {
      this.props.initializeApp();
   }

   render() {
      if (!this.props.initialized) {
         return <Preloader />
      }


      return (
         <div className='app-wrapper'>
            <HeaderContainer />
            <Navbar />
            <div className='app-wrapper-content'>
               <Route path='/dialogs'
                  render={withSuspense(DialogsContainer)} />


               <Route path='/profile/:userId?' 
               render={withSuspense(ProfileContainer)} />

               <Route path='/users' render={() => <UsersContainer />} />

               <Route path='/news' render={() => <News />} />

               <Route path='/music' render={() => <Music />} />

               <Route path='/settings' render={() => <Settings />} />

               <Route path='/login' render={() => <Login />} />

            </div>
         </div>);
   }
}


const mapStateToProps = (state) => ({
   initialized: state.app.initialized
})


let AppContainer = compose(
   withRouter,
   connect(mapStateToProps, { initializeApp }))(App);

const SamuraiJsApp = (props) => {
   return <BrowserRouter>
      <Provider store={store}>
         <AppContainer />
      </Provider>
   </BrowserRouter>
}

export default SamuraiJsApp;