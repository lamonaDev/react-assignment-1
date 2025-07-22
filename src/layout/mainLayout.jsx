import React from "react";
import { Fragment } from "react";
import Navbar from "../components/ui/nav";
import Footer from "../components/ui/footer";
import Home from '../routes/home'
import About from "../routes/about";
import Skills from "../routes/portofolio";
import { Outlet } from "react-router-dom";
function mainLayout() {
    return (
        <Fragment>
            <Navbar />
                <Outlet />
            <Footer />
        </Fragment>
    )
}
export default mainLayout;