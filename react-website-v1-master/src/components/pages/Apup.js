import React from "react";
import Footer from "../Footer";
import ServiceRegister from "../ServiceRegister";
export default function Apup() {
  const mapStyles = {
    width: "100%",
    height: "100%",
  };
  return (
    <div style={{ color: "#a4cae0", padding: 40 }}>
      <h2>Incoming International Students: When you arrive:</h2>
      <h4>
        Congratulations on your acceptance to the University of
        Michigan-Dearborn! You may use the information on this page to make your
        arrival as smooth as possible. We are looking forward to welcoming you
        to campus.
      </h4>
      <h2>Arrive in the USA:</h2>
      <h4>
        You may enter the USA in initial F-1 or J-1 status up to 30 days ahead
        of your program start date. You can confirm your program start date on
        page one of your I-20 or DS-2019. When you arrive at the airport, you
        will have to go through an official immigration check to be admitted
        into the country. At this point you will present your passport and I-20
        or DS-2019 to an immigration officer. Please make sure not to pack away
        this documentation in your luggage. You will need to have it available
        at the airport immigration check. The immigration officer will review
        your documentation and conduct a brief interview. Just focus on
        providing honest information about your visit to the USA as a student or
        scholar attending UM-Dearborn.
      </h4>
      <h2>Get to UM-Dearborn:</h2>
      <h4>
        When you arrive at the Detroit airport (DTW), we recommend that you take
        a taxi to campus or wherever you will be staying. Taxis are available
        from the luggage pick-up area of the airport. The cost is approximately
        $35 from Detroit Metro Airport to UM-Dearborn. Please keep the address
        for the University or your housing address with you. Also, carry the
        number for Public Safety.
      </h4>
      <h1>Address</h1>
      <h1>Fill out a registration form</h1>
      <ServiceRegister />
      <Footer />
    </div>
  );
}
