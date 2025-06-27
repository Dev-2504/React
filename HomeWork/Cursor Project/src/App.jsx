import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center py-6 px-2">
      <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
        {/* Image Section - order first on mobile, second on desktop */}
        <div className="flex-1 bg-black flex items-center justify-center order-1 md:order-2 rounded-xl md:rounded-none md:rounded-r-xl">
          <img
            src="/Login Art.png"
            alt="Login Art"
            className="w-full h-80 md:h-full object-cover object-center rounded-xl md:rounded-none md:rounded-r-xl"
          />
        </div>
        {/* Form Section - order second on mobile, first on desktop */}
        <div className="flex-1 flex flex-col justify-center px-6 py-10 md:py-16 order-2 md:order-1">
          <div className="w-full max-w-sm mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back <span className="inline-block">👋</span></h2>
            <p className="text-gray-500 mb-8">Sign in to your account</p>
            <form className="space-y-5">
              <div>
                <label className="block text-gray-700 mb-1 text-sm font-medium">Email</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#181A20]" placeholder="Enter your email" />
              </div>
              <div>
                <label className="block text-gray-700 mb-1 text-sm font-medium">Password</label>
                <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#181A20]" placeholder="Enter your password" />
              </div>
              <div className="flex justify-end">
                <a href="#" className="text-sm text-[#181A20] hover:underline font-medium">Forgot password?</a>
              </div>
              <button type="submit" className="w-full bg-[#181A20] text-white py-2 rounded-lg font-semibold hover:bg-[#23262f] transition">Sign In</button>
            </form>
            <div className="flex items-center my-6">
              <div className="flex-grow h-px bg-gray-200" />
              <span className="mx-3 text-gray-400 text-sm">or</span>
              <div className="flex-grow h-px bg-gray-200" />
            </div>
            <div className="flex flex-col gap-3">
              <button className="flex items-center justify-center gap-2 w-full border border-gray-300 rounded-lg py-2 font-medium hover:bg-gray-50 transition">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                Continue with Google
              </button>
              <button className="flex items-center justify-center gap-2 w-full border border-gray-300 rounded-lg py-2 font-medium hover:bg-gray-50 transition">
                {/* Facebook SVG Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1877F2" className="w-5 h-5"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
                Continue with Facebook
              </button>
            </div>
            <p className="mt-8 text-center text-gray-500 text-sm">
              Don't have an account?{' '}
              <a href="#" className="text-[#181A20] font-semibold hover:underline">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
