import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqData = [
  {
    question: 'How do I reset my password?',
    answer: 'To reset your password, go to the Setting page and click on "Forgot Password".',
  },
  {
    question: 'How do I contact support?',
    answer: 'You can contact support by filling out the support form below or emailing us at support@example.com.',
  },
  {
    question: 'Can I Edit or Delete a job posting?',
    answer: 'To Edit or Delete a job, go to "Job Management System". ',
  },
  {
    question: 'How do I delete my account?',
    answer: 'To delete your account, contact support via the support form or email us at support@example.com, and we will assist you with the process.',
  },
  {
    question: 'What should I do if I encounter a technical issue?',
    answer: 'If you encounter a technical issue, try restarting the app. If the issue persists, contact support with details of the problem.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div className="max-w-3xl mx-auto py-8 px-4" initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}>
      <h2 className="text-2xl font-semibold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            <div
              className="text-lg font-medium cursor-pointer" onClick={() => toggleAnswer(index)}>
              {item.question}
            </div>


            {openIndex === index && (
              <div className="mt-2 text-gray-400">{item.answer}</div>
            )}
          </div>
        ))}


      </div>
    </motion.div>
  );
};

export default FAQ;
