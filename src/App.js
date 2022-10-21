import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import "./style/style.css"
import OurServicesPage from './components/Ourservices.jsx';
import WhyUs from './components/WhyUs.jsx';
import Testimonial from './components/Testimonial.jsx';
import FAQ from './components/FAQ.jsx';
import HomePageAndNav from './components/HomePageAndNav.jsx';
import SearchCar from './components/SearchCar';
import SearchResultEdit from './components/SearchResultEdit';
import DetailCar from './components/DetailCar';



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


     
      
    </div>
    
  )
}

export default App;
