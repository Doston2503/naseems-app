import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Loading from "./components/loading/Loading";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import Navbar from "./components/navbar/Navbar";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Courses from "./pages/courses/Courses";
import News from "./pages/news/News";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import CourseDetail from "./pages/course-detail/CourseDetail";
import NewsDetail from "./pages/news-detail/NewsDetail";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    if (loading) {
        return <Loading/>;
    }

    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route path="/" exact={true} component={Home}/>
                <Route path="/about-us" component={About}/>
                <Route path="/courses" exact={true} component={Courses}/>
                <Route path="/courses/detail" component={CourseDetail}/>
                <Route path="/news-blogs" exact={true} component={News}/>
                <Route path="/news-blogs/detail" exact={true} component={NewsDetail}/>
                <Route path="/contact" component={Contact}/>
            </Switch>
            <Footer/>
            <ScrollToTop/>
            <ToastContainer/>
        </BrowserRouter>
    );
}

export default App;
