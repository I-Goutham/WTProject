import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function EventCards() {
  return (
    <div className="cards">
      <h1>Check out Events</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Airport Pickup Service"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Career Guidance"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Shuttle Service"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Accomodation"
              label="Adventure"
              path="/products"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-8.jpg"
              text="Question and Answer"
              label="Adrenaline"
              path="/faq"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EventCards;
