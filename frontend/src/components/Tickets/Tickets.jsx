import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useJsonFetch from '../../hooks/useJsonFetch.js';

const loadingUrl = process.env.REACT_APP_LOADING_URL;
const loadingOpts = {};

function Tickets() {
  const [data, loading, error] = useJsonFetch(loadingUrl, loadingOpts);

  const tickets = (data)
    ? data.tickets
    : [];

  return (
    <div className={classNames('tickets', { 'loading': loading, 'error': error })}>
      <span className="loading-message">Search for available tickets...</span>
      <span className="error-message">Please try again later</span>
      <ul className="tickets-list">
        {tickets.map((ticket) =>
          <li key={ticket.id} className="ticket">
            <div className="ticket-company">{ticket.company}</div>
            <div className="ticket-departure">{ticket.departure}</div>
            <div className="ticket-time">{ticket.departureTime}</div>
            <div className="ticket-arrival">{ticket.arrival}</div>
            <div className="ticket-time">{ticket.arrivalTime}</div>
            <div className="ticket-price">Book now for {ticket.price} ₽</div>
          </li>
        )}
      </ul>
    </div>
  )
}

Tickets.propTypes = {
};

export default Tickets;
