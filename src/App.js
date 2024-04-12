import './App.css';
import AdministratorMenu from './Componentes/AdministratorMenu/AdministratorMenu';
import TopBarMenu from './Componentes/TopBarMenu/TopBarMenu';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div style={{position: "absolute", left: 0, top: 0, bottom: 0, width: "300px", backgroundColor: "#0077b5"}}>
          <AdministratorMenu/>
      </div>
      <div className="right-section" style={{position: "absolute", left: 300, top: 0, bottom: 0, width: "83%", height: "10%", backgroundColor: "#ed0b0b"}}>
          <TopBarMenu/>
        </div>
        
      </header>
    </div>
  );
}

export default App;
