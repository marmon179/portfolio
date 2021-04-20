import './App.css';
import {Header} from './header/Header';
import {Main} from './main/Main';
import {Skills} from './skills/Skills';
import {MyWorks} from './my-works/MyWorks';
import {DistantWork} from './distant-work/DistantWork';

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <DistantWork/>
        </div>
    );
}

export default App;
