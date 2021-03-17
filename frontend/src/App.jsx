import StatusFetcher from './components/StatusFetcher/StatusFetcher.jsx';
import Unsubscribe from './components/Unsubscribe/Unsubscribe.jsx';
import Tickets from './components/Tickets/Tickets.jsx';
import { nanoid } from 'nanoid';
import './App.css';

const ticketsData = [{
  id: nanoid(), company: 'KLM', departure: 'St.Petersburg', departureTime: '06:50', arrival: 'Amsterdam', arrivalTime: '12:30', price: 11350,
}, {
  id: nanoid(), company: 'KLM', departure: 'St.Petersburg', departureTime: '09:20', arrival: 'Amsterdam', arrivalTime: '19:45', price: 9750,
}, {
  id: nanoid(), company: 'KLM', departure: 'St.Petersburg', departureTime: '15:40', arrival: 'Amsterdam', arrivalTime: '21:15', price: 14800,
}];

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
        <p className="lead">Server responds to the request immediately with HTTP status 500 and data <i>&#123;"status":"Internal Error"&#125;</i></p>
        <Unsubscribe />
      </div>

      <div className="demo-item tickets-demo">
        <h2>Tickets</h2>
        <p className="lead">
          Server responds to the request after 5 second with HTTP status 200 and data <i>&#123;"status":"ok"&#125;</i><br />
        </p>
        <Tickets items={ticketsData} />
      </div>
    </div>
  );
}

export default App;
