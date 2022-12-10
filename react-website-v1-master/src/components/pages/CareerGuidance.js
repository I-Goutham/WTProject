import React from "react";
import questions from "./careerGuidance.json";
import Banner from "../Banner";
import Footer from "../Footer";
import ServiceRegister from "../ServiceRegister";

export default function CareerGuidance() {
  return (
    <div>
      <Banner>
        <Banner.Header>Career Guidance</Banner.Header>
        {questions.map((question) => (
          <Banner.Entity key={question.id}>
            <Banner.Question>{question.question}</Banner.Question>
            <Banner.Text>{question.answer}</Banner.Text>
          </Banner.Entity>
        ))}
        <h4>
          Question not on the list? Contact out help desk for further enquiries
        </h4>
      </Banner>
      <h1>Fill out a the form from registration</h1>
      <ServiceRegister />
      <Footer />
      <Footer />
    </div>
  );
}
