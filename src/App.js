import './App.scss';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Row from './components/Row';
import requests from './components/data/Requests';
import QuickView from './components/QuickView';

export default function App() {
    
    return (
        
        <div className="App">
            <Nav />
            <Banner />
            <Row title="Tendances du moment" fetchUrl={requests.fetchTopRated} isPoster={true} />
            <Row title="Comedies" fetchUrl={requests.fetchComedyMovies} />
            <Row  title="Actions" fetchUrl={requests.fetchActionMovies} />
            <Row title="Romance" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Horreur" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaire" fetchUrl={requests.fetchDocumentaries} />
        
            {/* {video} */}
            {/* {quick view} */}
            <Footer />
            {/* <Requests /> */}
        </div>
    );
}

