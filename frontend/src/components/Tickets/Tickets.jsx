import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useJsonFetch from '../../hooks/useJsonFetch.js';

const loadingUrl = process.env.REACT_APP_LOADING_URL;
const loadingOpts = {};

function TicketItem(props) {
  const [data, loading, error] = useJsonFetch(loadingUrl, loadingOpts);

  return (
    <li
      className={classNames('ticket', {
        'price-ok': data && data.status === 'ok',
        'loading': loading,
        'error': error
      })}
    >
      <div className="ticket-company">{props.company}</div>
      <div className="ticket-departure">{props.departure}</div>
      <div className="ticket-time">{props.departureTime}</div>
      <div className="ticket-arrival">{props.arrival}</div>
      <div className="ticket-time">{props.arrivalTime}</div>
      <div className="ticket-price">Book now for {props.price} ₽</div>
      <div className="ticket-loading">Looking for best price...</div>
      <div className="ticket-error">Error</div>
    </li>
  );
}

TicketItem.propTypes = {
  company: PropTypes.string.isRequired,
  departure: PropTypes.string.isRequired,
  departureTime: PropTypes.string.isRequired,
  arrival: PropTypes.string.isRequired,
  arrivalTime: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

function Tickets(props) {
  const { items } = props;

  return (
    <div className="tickets">
      <ul className="tickets-list">
        {items.map((item) =>
          <TicketItem key={item.id} {...item} />
        )}
      </ul>
    </div>
  )
}

Tickets.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape(TicketItem.propTypes),
  ),
};

Tickets.defaultProps = {
  items: [],
};

export default Tickets;
