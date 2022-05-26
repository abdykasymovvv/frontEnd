import './App.css';
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/Header";
import {Login} from "./components/authcomponents/login";
import RegisterUser from "./components/authcomponents/register";
import {useEffect} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {Aut_Me} from "./reducers/authreducer";



function App(props) {
    useEffect(() => {
        props.Aut_Me()
    }, [props.isAuth])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<RegisterUser/>}/>
      </Routes>
    </div>
  );
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    currentUserName: state.auth.username,
    token_success: state.auth.token_success,
    username: state.auth.username,
})
export default compose(connect(mapStateToProps, {Aut_Me}))(App);
