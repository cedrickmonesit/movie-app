//history is installed automatically by react-router-dom
//it is a dependency that react-router-dom uses
//createBrowserHistory() is a function we can call to get the history object
import { createBrowserHistory } from "history";

//We have to create a plain router instead of a browser router
//Since we are managing the history ourselves
export default createBrowserHistory();
