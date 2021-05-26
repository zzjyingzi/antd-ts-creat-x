import configureStore from "./util/config-store";
import reducers from "./reducers";


// store和initialState独立出来更好
const initialStates = {};
const store = configureStore(reducers, initialStates);
export default store;
