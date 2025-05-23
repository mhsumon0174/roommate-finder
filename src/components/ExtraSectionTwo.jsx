import React from "react";

const ExtraSectionTwo = () => {
  return (
    <div className="bg-blue-50 py-10 px-6 md:px-16 rounded-lg shadow-md my-12">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4 max-w-3xl mx-auto">

        <div className="collapse collapse-arrow bg-white border border-base-300">
          <input type="radio" name="faq-accordion" defaultChecked />
          <div className="collapse-title text-lg font-semibold text-blue-900">
            Is it safe to find roommates online?
          </div>
          <div className="collapse-content text-base text-gray-800">
            Yes, it can be safe if you take precautions like meeting in public places and avoiding early transactions.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-white border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg font-semibold text-blue-900">
            Should I sign an agreement with my roommate?
          </div>
          <div className="collapse-content text-base text-gray-800">
            Yes. A written agreement helps prevent future disputes regarding rent, rules, and responsibilities.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-white border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg font-semibold text-blue-900">
            Can I choose roommates based on preferences?
          </div>
          <div className="collapse-content text-base text-gray-800">
            Absolutely. You can filter by budget, gender, habits, and other preferences to find a good match.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-white border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg font-semibold text-blue-900">
            What if I feel unsafe after moving in?
          </div>
          <div className="collapse-content text-base text-gray-800">
            Communicate clearly, and if things don't improve, consider changing roommates or contacting support.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-white border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg font-semibold text-blue-900">
            Do I need to pay to use this service?
          </div>
          <div className="collapse-content text-base text-gray-800">
            Basic use is free, but there may be charges for premium features depending on the platform.
          </div>
        </div>

      </div>
    </div>
  );
};

export default ExtraSectionTwo;
