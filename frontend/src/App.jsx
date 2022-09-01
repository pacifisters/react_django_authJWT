import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Header from "./components/Header"
import Footer from "./components/Footer"
import AppRouter from "./components/AppRouter";
import React, { useContext, useEffect, useState } from "react";
import { observer } from 'mobx-react-lite';
import { Context } from '.';
import { check } from './http/userAPI';
import { Spinner } from 'react-bootstrap';




const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
           user.setUser(true)
           user.setIsAuth(true) 
        }).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Spinner animation={"grow"} />
    }

    return (
        <BrowserRouter>

            <Header />

            <AppRouter />
            <Footer />
        </ BrowserRouter>
    );
});


export default App;



