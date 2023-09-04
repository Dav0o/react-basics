import ReactDOM from 'react-dom/client'
import './index.css'
import { Layout } from './pages/_layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import ListCompanies from './pages/companies/ListCompanies'
import ListOffers from './pages/offers/ListOffers'
import Menu from './components/Menu'

// const CounterContext = React.createContext(0);
import categories from '../src/utils/json/categories.json'
import DebounceTime from './components/DebounceTime'
import Login from './pages/login/Login'
import Articles from './pages/exam/Articles'
import Suggestions from './pages/exam/Suggestions'
import FilteredArticles from './pages/exam/FilteredArticles'

ReactDOM.createRoot(document.getElementById('root')).render(
     
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/companies" element={<ListCompanies />} />
          <Route path="/offers" element={<ListOffers />} />
          <Route path="/menu" element={<Menu data={categories} />} />
          <Route path="/debounce" element={<DebounceTime />} />
          {/* <Route path="/suggestions" element={<Suggestions />} /> */}
          <Route path="/keywords" element={<Suggestions />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/filterarticles" element={<FilteredArticles />} />
        </Route>
      </Routes>
      </BrowserRouter>  
)

// export default CounterContext;
