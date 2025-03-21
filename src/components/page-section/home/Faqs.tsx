import React from "react";
import { Link } from "react-router-dom";
import { contact } from "../../../constants/contact";

const FAQs: React.FC = () => {
  return (
    <div style={{backgroundImage: `url(/pic/vision.png)`}} className="our-faqs parallaxie">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="our-faqs-content">
              <div className="section-title">
                <h3 className="fadeInUp wow">FAQs</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Frequently asked questions
                </h2>
              </div>
              <div className="faq-cta-box">
                <div className="customer-images">
                  {[1, 2, 3, 4].map((num) => (
                    <div className="customer-img" key={num}>
                      <figure className="image-anime reveal">
                        <img src={`images/customer-img-${num}.jpg`} alt="customer" />
                      </figure>
                    </div>
                  ))}
                </div>
                <div className="fadeInUp faq-cta-box-content wow" data-wow-delay="0.2s">
                  <h3>Still have you any question?</h3>
                  <Link to={`tel:+${contact.number}`} className="btn-faqs">
                    {contact.number}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="faq-accordion" id="faqaccordion">
              {faqData.map((faq, index) => (
                <div className="accordion-item fadeInUp wow" key={faq.id} data-wow-delay={`${index * 0.2}s`}>
                  <h2 className="accordion-header" id={`heading${faq.id}`}>
                    <button
                      className="collapsed accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${faq.id}`}
                      aria-expanded="false"
                      aria-controls={`collapse${faq.id}`}
                    >
                      <span>{faq.id}.</span> {faq.question}
                    </button>
                  </h2>
                  <div
                    id={`collapse${faq.id}`}
                    className="collapse accordion-collapse"
                    aria-labelledby={`heading${faq.id}`}
                    data-bs-parent="#faqaccordion"
                  >
                    <div className="accordion-body">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const faqData = [
  { id: 1, question: "What is mental therapy, and how can it help me?", answer: "It's essential to feel comfortable and understood by your therapist. If you don't feel a connection, it's okay to discuss your concerns." },
  { id: 2, question: "What if I don't feel a connection with my therapist?", answer: "It's essential to feel comfortable and understood by your therapist. If you don't feel a connection, it's okay to discuss your concerns." },
  { id: 3, question: "What should I expect in my first session?", answer: "It's essential to feel comfortable and understood by your therapist. If you don't feel a connection, it's okay to discuss your concerns." },
  { id: 4, question: "Will therapy be covered by my insurance?", answer: "It's essential to feel comfortable and understood by your therapist. If you don't feel a connection, it's okay to discuss your concerns." },
  { id: 5, question: "How long does therapy usually take?", answer: "It's essential to feel comfortable and understood by your therapist. If you don't feel a connection, it's okay to discuss your concerns." }
];

export default FAQs;