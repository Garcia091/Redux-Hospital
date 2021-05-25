import {createStore} from 'redux';
import reducer from '../reducers'

import {obtenerStateStorage , guardarStateStorage} from '../LocalStorage'


//storageState
const storageState =obtenerStateStorage()

 const store = createStore(
    reducer,
      //storageState
    storageState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//mostrar el storage
store.subscribe( () => {
  guardarStateStorage({
      citas: store.getState().citas
  })
} )

export default store;