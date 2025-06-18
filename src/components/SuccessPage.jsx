import React from 'react';
import { CheckCircle, ArrowLeft, Phone, Mail } from 'lucide-react';

const SuccessPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          
          {/* Success Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Thank You for Your Submission!
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            We've received your project details and will review them carefully. Our team will contact you within 24 hours to discuss your Amazon optimization project and next steps.
          </p>
          
          {/* What's Next */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">What Happens Next?</h2>
            <div className="space-y-3 text-left">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</div>
                <span className="text-gray-700">We'll review your project requirements and Amazon listing</span>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</div>
                <span className="text-gray-700">Our team will contact you to discuss timeline and any additional details</span>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</div>
                <span className="text-gray-700">We'll begin work on your Amazon optimization project</span>
              </div>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-600 mb-4">Need immediate assistance? Contact us directly:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:support@hbns.com" 
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Support
              </a>
              <a 
                href="tel:+13072058381" 
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us: (307) 205-8381
              </a>
            </div>
          </div>
          
          {/* Back to Home */}
          <div className="mt-8">
            <a 
              href="/" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;

