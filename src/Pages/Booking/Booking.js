import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingModal from "../BookingModal/BookingModal";

const Booking = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  const [openBooking, setOpenBooking] = React.useState(false);
  const handleBookingOpen = () => setOpenBooking(true);
  const handleBookingClose = () => setOpenBooking(false);
  useEffect(() => {
    fetch(
      `https://fathomless-chamber-42458.herokuapp.com/services/${serviceId}`
    )
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <>
      <div data-aos="zoom-out-down">
        <img src={service.img} alt="" />
        <h2>{service.name}</h2>
        <h4>{service.price}</h4>
        <button onClick={handleBookingOpen}>Booking The Ride</button>
      </div>

      <BookingModal
        handleBookingClose={handleBookingClose}
        openBooking={openBooking}
      ></BookingModal>
    </>
  );
};

export default Booking;
