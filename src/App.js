import React from 'react';
import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';

import { fetchCartData, sendCartData } from './store/cart-actions';
import { useSelector,useDispatch } from 'react-redux';


let isinitial=true;
function App() {
  const dispatch=useDispatch();
  const showCart=useSelector(state=>state.ui.cartIsVisible);
  const cart=useSelector(state=>state.cart);
  const notification=useSelector(state=>state.ui.notification);


  useEffect(()=>{
    dispatch(fetchCartData())
  },[dispatch])

  useEffect(()=>{
    //to not do anything at first time
    if(isinitial){
      isinitial=false;
      return
    }
    if(cart.changed){

      dispatch(sendCartData(cart));
    }
    
  },[cart,dispatch]);


  //other way to set time of notification
  // useEffect(()=>{
  //   if(notification){
  //     const timer=setTimeout(()=>{
  //       dispatch(uiActions.hideNotification());
  //     },1000);
  //     return ()=>{
  //       clearTimeout(timer);
  //     };
  //   }
  // },[notification,dispatch]);



  return (
    <React.Fragment>
      {notification && <Notification status={notification.status} message={notification.message} title={notification.title}></Notification>}
      <Layout>
      {showCart&&<Cart />}
      <Products />
    </Layout>
    </React.Fragment>
  );
}

export default App;
