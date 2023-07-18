import './App.css'
import { useState, useEffect, React } from 'react'
import { Navbar, Header, Main, Footer, Reservations, OrderOnline } from './components'
import { Routes, Route, useLocation } from "react-router-dom"
import { headerData, reservationData, orderOnline } from './constants'
import DataContext from './DataContext'
import ConfirmedBooking from './components/Reservations/ConfirmedBooking'

function App() {
    const location = useLocation();
    let data = {}

    useEffect(() => {
        switch (location.pathname) {
            case '/':
                data = headerData
                return
            case '/Little-Lemon':
                document.title = 'Little Lemon'
                return
            case '/Reservations':
                data = reservationData
                return
            case '/OrderOnline':
                data = orderOnline
                return
        }
    }, [location.pathname])

    return (
        <>
            <Navbar />
            <DataContext.Provider value={data}>
                <Routes>
                    <Route path='/Little-Lemon' element={
                        <>
                            <Header />
                            <Main />
                        </>
                    } />
                    <Route path='/' element={
                        <>
                            <Header />
                            <Main />
                        </>
                    } />
                    <Route path='/Reservations' element={
                        <>
                            <Header />
                            <Reservations />
                        </>
                    } />
                    <Route path='/OrderOnline' element={
                        <>
                            <Header />
                            <OrderOnline />
                        </>
                    } />

                    <Route path='/ConfirmedBooking' element={<ConfirmedBooking />} />
                </Routes>
            </DataContext.Provider>
            <Footer />
        </>
    );
}

export default App;
