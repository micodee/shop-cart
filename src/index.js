import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import './App'

ReactDOM.render(
<Provider store={store}>
    <App/>
</Provider>
, 
document.querySelector('#root'))