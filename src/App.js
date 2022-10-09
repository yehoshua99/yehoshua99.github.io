import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
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
import HomePageAndNav from './components/HomePageAndNav.jsx';
import SearchCar from './components/SearchCar';
import SearchResultEdit from './components/SearchResultEdit';
import DetailCar from './components/DetailCar';
// import Pencarian from './components/Pencarian';
// import HasilPencarian from './components/HasilPencarian';
// import Detail from './components/Detail';


function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>

              <Route exact path="/" element={<HomePageAndNav/>}/>
              <Route exact path="/ourservices" element={<OurServicesPage/>} />
              <Route exact path="/whyus" element={<WhyUs/>}/>
              <Route exact path='/testimonial' element={<Testimonial/>}/>
              <Route exact path='/frequentlyaskedquestion' element={<FAQ/>}/>
              <Route exact path='/searchcar' element={<SearchCar/>}/>
              <Route exact path='/searchresultedit' element={<SearchResultEdit/>}/>
              <Route exact path='/detailcar' element={<DetailCar/>}/>
              
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
      </div> */}

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
      </div>  */}
      
    </div>
    
  )
}

export default App;
