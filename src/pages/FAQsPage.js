import React from "react";

const FAQsPage = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      
      {/* FAQ section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Question 1?</h2>
          <p className="text-gray-700">Answer to Question 1.</p>
        </div>
      
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Question 2?</h2>
          <p className="text-gray-700">Answer to Question 2.</p>
        </div>
      
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Question 3?</h2>
          <p className="text-gray-700">Answer to Question 3.</p>
        </div>
      
        {/* Add more FAQs here */}
      </div>
    </div>
  );
};

export default FAQsPage;
