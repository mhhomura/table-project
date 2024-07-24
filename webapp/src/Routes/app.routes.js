import React from 'react';
import { Routes, Route } from "react-router-dom";
import MainPage from '../Pages/MainPage';
import Layout from '../Components/Layout';

const AppRoutes = () => (
    <Layout>
        <Routes>
            <Route path="" element={<MainPage />} />
        </Routes>
    </Layout>

);

export default AppRoutes;