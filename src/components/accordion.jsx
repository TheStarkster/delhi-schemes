import React, { useState } from 'react';

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="border-b">
      <button
        className="w-full text-left px-4 py-2 focus:outline-none"
        onClick={toggleOpen}
      >
        <div className="flex justify-between items-center">
          <span className='text-2xl font-bold py-4'>{title}</span>
          <span>{isOpen ? '▲' : '▼'}</span>
        </div>
      </button>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};

const Accordion = ({ data }) => {
  return (
    <div className="container mx-auto p-4">
      {data.map((item, index) => (
        <AccordionItem key={index} title={item.resource}>
          {item.information}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;