import configureStore from "./util/config-store";
import reducers from "./reducers";

const initialStates = {};
const store = configureStore(reducers, initialStates);
export default store;
