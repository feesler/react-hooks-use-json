import StatusFetcher from './components/StatusFetcher/StatusFetcher.jsx';
import Unsubscribe from './components/Unsubscribe/Unsubscribe.jsx';
import Tickets from './components/Tickets/Tickets.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="demo-item">
        <h2>StatusFetcher</h2>
        <p className="lead">Server responds to the request immediately with HTTP status 200 and data <i>&#123;"status":"ok"&#125;</i></p>
        <StatusFetcher />
      </div>

      <div className="demo-item">
        <h2>Unsubscribe</h2>
        <p className="lead">Server responds to the request after 1 second with HTTP status 500 and data <i>&#123;"status":"Internal Error"&#125;</i></p>
        <Unsubscribe />
      </div>

      <div className="demo-item tickets-demo">
        <h2>Tickets</h2>
        <p className="lead">
          Server responds to the request after 5 second with HTTP status 200 and data <i>&#123;"status":"ok","data":[ ... ]&#125;</i><br />
          Request starts immediately on first render of component
        </p>
        <Tickets />
      </div>
    </div>
  );
}

export default App;
