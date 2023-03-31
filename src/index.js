import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import store from './store/store'

// const Wid = {

//     render() {
//         console.log('render');
//         return true;
//     },

//     init() {
//         console.log('init');
//         return true;
//     },

//     bind_actions() {
//         console.log('bind_actions');
//         return true;
//     },

//     settings() {
//     },

//     advancedSettings() {
//         console.log("react advansedSettings")
//         const root = ReactDOM.createRoot(document.getElementById('list_page_holder'));
//         root.render(
//             <Provider store={store}>
//                 <App />
//             </Provider>
//         );
//     },

//     onSave() {

//     },

//     destroy() {
//         console.log('destroy');
//     },

//     contacts_selected() {

//     },

//     leads_selected() {

//     },

//     tasks_selected() {

//     }

// };

// export default Wid;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);