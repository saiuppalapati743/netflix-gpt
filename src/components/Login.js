import { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const handleClick = () => {
    setIsSignIn(!isSignIn);
  }
  return (
    <div className="bg-cover bg-center  bg-black"
      style={{ backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_small.jpg')" }}>
      <svg
        viewBox="0 0 111 30"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={150}
        height={60}
        fill="red"
        margin-left="20px"
        transform="opa"
      >
        <g>
          <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,0 L99.5313525,0 L102.593495,7.87421502 L105.874965,0 L110.999156,0 L105.06233,14.2806261 Z M90.4686475,0 L85.8749649,0 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,0 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,0 L73.9366389,0 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,0 L66.3436123,0 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,0 L50.2183897,0 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,0 L32.7809542,0 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,0 L4.4690224,0 L10.562377,17.0315868 L10.562377,0 L15.2497891,0 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" />
        </g>
      </svg>

      <div className="min-h-screen flex items-center justify-center">
        <form className="text-white p-8 rounded-lg shadow-lg w-full max-w-md bg-black/60">
          {isSignIn ? <h2 className="text-2xl font-bold mb-6">Sign In</h2> : <h2 className="text-2xl font-bold mb-6">Sign Out</h2>}
      {!isSignIn &&    <div className="mb-4">
            <input
              id="Full Name"
              type="text"
              placeholder="Enter your Full Name"
              className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>}
          <div className="mb-4">
            <input
              id="email"
              type="email"
              placeholder="Email or Phone Number"
              className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

       {isSignIn  ? <button
            type="Sign In"
            className="w-full bg-red-600 hover:bg-black-200 text-white font-semibold py-2 px-4 rounded cursor-pointer"
          >
            Sign In
          </button>: <button className="w-full bg-red-600 hover:bg-black-200 text-white font-semibold py-2 px-4 rounded cursor-pointer">
            Sign Out
          </button>}
          {isSignIn ? <p className="p-4 cursor-pointer" onClick={handleClick}>New to Netflix?Sign up now</p> : <p className="p-4 cursor-pointer" onClick={handleClick}>Already a Customer?Sign In</p>}
        </form>
      </div>

    </div>
  );
};

export default Login;
