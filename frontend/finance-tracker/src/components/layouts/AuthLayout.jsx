import React from 'react';

const AuthLayout = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* logo */}
      <div className="absolute top-6 left-6 z-20">
        <div className="flex items-center gap-2 px-4 py-2 bg-white/90 rounded-full shadow-md">
          <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full"></div>
          <h2 className="text-xl font-extrabold text-gray-800 tracking-tight">
            Finance<span className="text-blue-600">Tracker</span>
          </h2>
        </div>
      </div>
      
      <div className="flex flex-1">
        {/* content side card */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 sm:px-12 lg:px-16">
          <div className="bg-white p-8 sm:p-10 rounded-xl shadow-2xl border border-gray-100">
            {children}
          </div>
        </div>
        
        {/* visual side */}
        <div className="hidden md:block md:w-1/2 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/10 rounded-full blur-xl"></div>
          
          <div className="h-full flex flex-col justify-center items-center text-white p-12 relative z-10">
            <div className="text-center max-w-md">
              <h1 className="text-5xl font-bold mb-8 leading-tight">
                Take Control of Your Finances
              </h1>
              <p className="text-xl opacity-90 leading-relaxed mb-10">
                Track expenses, set budgets, and achieve your financial goals with our intuitive tools
              </p>
              
              {/* features list */}
              <div className="flex flex-col gap-4 text-left">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-full">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Effortless expense tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-full">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Smart budget management</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-full">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Insightful financial reports</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;