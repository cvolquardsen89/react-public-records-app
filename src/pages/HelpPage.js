import React, { useState } from "react";

const HelpPage = () => {
    const [faq, setFaq] = useState([
        { question: "How do I request public records?", answer: "Go to the home page, enter details, and submit a request.", open: false },
        { question: "What if a record is not available?", answer: "If the record does not exist, you will be notified and may request a refund if applicable.", open: false },
        { question: "How long does it take to receive records?", answer: "Response times vary by agency but typically range from a few days to several weeks.", open: false },
    ]);

    const toggleFAQ = (index) => {
        setFaq(faq.map((item, i) => i === index ? { ...item, open: !item.open } : item));
    };

    return (
        <div className="help-page">
            <h1>Help & Support</h1>
            <p>Find answers to common questions about requesting public records.</p>

            <div className="faq-section">
                {faq.map((item, index) => (
                    <div key={index} className="faq-item">
                        <button className="faq-question" onClick={() => toggleFAQ(index)}>
                            {item.question}
                        </button>
                        {item.open && <p className="faq-answer">{item.answer}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HelpPage;