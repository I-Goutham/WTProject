import React from "react";
import questions from "./Faq.json";
import Banner from "../Banner";
import Footer from "../Footer";
export default function FAQ() {
  return (
    <div>
      <Banner>
        <Banner.Header>Frequently Asked Questions</Banner.Header>
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
      <Footer />
    </div>
  );
}
