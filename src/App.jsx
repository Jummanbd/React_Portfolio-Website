import './App.css'
import Blog from './component/Blog/Blog'
import Contact from './component/Contact/Contact'
import Features from './component/Features/Features'
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header'
import Home from './component/Hero/Home'
import Portfolio from './component/Portfolio/Portfolio'
import Resume from './component/Resume/Resume'
import Testimonial from './component/Testimonial/Testimonial'
const App = () => {
  return(
    <>
    <Header/>
    <Home/>
    <Features/>
    <Portfolio/>
    <Resume/>
    <Testimonial/>
    <Blog/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
