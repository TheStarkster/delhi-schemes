import React, { useState } from 'react';

const DocumentAccordionItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="border-b">
      <button
        className="w-full text-left px-4 py-2 focus:outline-none"
        onClick={toggleOpen}
      >
        <div className="flex justify-between items-center">
          <span className='text-2xl font-bold py-4'>{item.resource}</span>
          <span>{isOpen ? '▲' : '▼'}</span>
        </div>
      </button>
      {isOpen && (
        <div className="p-4">
          <div dangerouslySetInnerHTML={{ __html: item.concerned_dept }} />
          <div dangerouslySetInnerHTML={{ __html: item.process }} />
          <div className="mt-2"><b>Cost Involved:</b> {item.cost_involved}</div>
          <div className="mt-2"><b>Processing Time:</b> {item["No. of days it takes to complete process"]}</div>
        </div>
      )}
    </div>
  );
};

const DocumentAccordion = ({ data }) => {
  return (
    <div className="container mx-auto p-4">
      {data.map((item) => (
        <DocumentAccordionItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default DocumentAccordion;
