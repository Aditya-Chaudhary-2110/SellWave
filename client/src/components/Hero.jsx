import { useState } from "react";
import { useNavigate } from "react-router-dom";

const avatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
];

export default function Hero() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate(`/marketPlace?search=${input}`);
  };

  return (
    <>
      <div className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            {/* Avatars */}
            <div className="flex -space-x-3">
              {avatars.map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  alt={`User ${index + 1}`}
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>

            {/* Stars + Text */}
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400 text-sm">★★★★★</div>
              <span className="text-sm text-gray-600">
                Used by 10,000+ users
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Buy & Sell your{" "}
            <span className="bg-linear-to-r from-purple-600 to-violet-500 bg-clip-text text-transparent">
              Social
            </span>
            <br />
            <span className="bg-linear-to-r from-purple-600 to-violet-500 bg-clip-text text-transparent">
              Profiles
            </span>{" "}
            online.
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            A secure marketplace to buy and sell Instagram, YouTube, Twitter,
            Telegram and more – fast, safe and hassle-free.
          </p>

          {/* Search Form */}
          <form
            onSubmit={onSubmitHandler}
            className="flex flex-col sm:flex-row items-center gap-3 max-w-xl mx-auto"
          >
            <label className="'border border-gray-400 rounded-md p-1 flex items-center w-full max-w-md">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Instagram account"
                className="w-full h-12 sm:h-14 pl-12 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                aria-label="Search for social profiles"
              />
            </label>

            <button className="w-full sm:w-auto h-12 sm:h-14 px-8 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-700 transition shadow">
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
