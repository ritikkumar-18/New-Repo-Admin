import React, { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import Header from '../Common/Header';

const Askedquestion = () => {
  // FAQ data
  const faqData = [
    {
      question: 'How do I create a job posting?',
      answer:
        'To create a job posting, navigate to the "Job Opening" section in the sidebar, click on "Create New Job," and fill out the required details such as job title, description, and requirements.',
    },
    {
      question: 'How can I search for candidates?',
      answer:
        'You can search for candidates by visiting the "Search Candidate" section. Use filters like skills, experience, and location to find the best matches for your job opening.',
    },
    {
      question: 'What is the shortlisting process?',
      answer:
        'The shortlisting process involves reviewing candidate profiles, resumes, and applications. You can shortlist candidates by marking them as "Shortlisted" in the "Candidate" section.',
    },
    {
      question: 'How do I schedule interviews?',
      answer:
        'You can schedule interviews by going to the "Calendar" section. Click on a date, add the candidate details, and set the interview time. Notifications will be sent to both you and the candidate.',
    },
    {
      question: 'Can I customize Offer templates?',
      answer:
        'Yes, you can customize Offer templates in the "Template" section. Choose from pre-designed templates or create your own to communicate with candidates effectively.',
    },
  ];

  
  const [openIndex, setOpenIndex] = useState(null);

  
  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
      <Header title={'F&Q'} />

      <LayoutGroup>
        <div className="max-w-3xl mx-auto p-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              layout 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <motion.div
                layout 
                onClick={() => toggleQuestion(index)}
                className="p-6 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors relative border-2 border-transparent hover:border-teal-500"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background:
                    openIndex === index
                      ? 'linear-gradient(45deg, rgba(56, 189, 248, 0.1), rgba(99, 102, 241, 0.1))'
                      : 'linear-gradient(45deg, rgba(56, 189, 248, 0.05), rgba(99, 102, 241, 0.05))',
                }}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">{item.question}</h2>
                  <motion.span
                    layout // Enables smooth layout animations
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl"
                  >
                    {openIndex === index ? '−' : '+'}
                  </motion.span>
                </div>
              </motion.div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    layout 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-gray-700 border border-teal-300 hover:text-teal-400 rounded-lg hover:cursor-pointer">
                      <p className="text-gray-300 ">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </LayoutGroup>
    </div>
  );
};

export default Askedquestion;