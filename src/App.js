import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation.jsx';
import IntroPage from './components/Intro.jsx';
import "./style/style.css"
import OurServicesPage from './components/Ourservices.jsx';
import WhyUs from './components/WhyUs.jsx';
import Testimonial from './components/Testimonial.jsx';
import FAQ from './components/FAQ.jsx';
import Detail from './components/Detail';
import HasilPencarian from './components/HasilPencarian';
import Pencarian from './components/Pencarian';
// import Pencarian from './components/Pencarian';
// import HasilPencarian from './components/HasilPencarian';
// import Detail from './components/Detail';
function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<IntroPage/>}/>
              <Route exact path="/" element={<Navigation/>}/>
              
              <Route exact path="/ourservices" element={<OurServicesPage/>} />
              <Route exact path="/whyUs" element={<WhyUs/>} />
          </Routes>
      </BrowserRouter>


      {/* <div className='BG'>
        <Navigation/>
        <Intro/>
      </div>

      <div className='BG2'>
        <Ourservices/>
      </div>

      <div className='BG3'>
        <WhyUs/>
      </div>

      <div className='BG4'>
        <Testimonial/>
      </div>

      <div className='BG5'>
        <FAQ/>
      </div>
      {/* <div className='BG6'>
        <Navigation/>
        <Pencarian/>
      </div> */}
      {/* <div  className='BG7'>
      <Navigation/>
      <HasilPencarian />
      </div> */}
      {/* <div className='BG8'>
        <Navigation/>
        <Detail/>
      </div> */} 
      
    </div>
    
  )
}

export default App;
