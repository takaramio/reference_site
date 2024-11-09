"use client";
import React from "react";

function MainComponent() {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 3) % 400);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-2xl md:text-2xl text-3xl flex flex-col md:flex-row">
            <span className="block md:inline">AI</span>
            <span className="block md:inline">COMMUNICATION</span>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i
              className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}
            ></i>
          </button>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:block md:flex gap-6 absolute md:static left-0 right-0 top-full bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none`}
          >
            <a
              href="#"
              className="block md:inline hover:text-gray-600 py-2 md:py-0"
            >
              PHILO
            </a>
            <a
              href="#"
              className="block md:inline hover:text-gray-600 py-2 md:py-0"
            >
              SERV
            </a>
            <a
              href="#"
              className="block md:inline hover:text-gray-600 py-2 md:py-0"
            >
              NEWS
            </a>
            <a
              href="#"
              className="block md:inline hover:text-gray-600 py-2 md:py-0"
            >
              ABOUT
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <section className="relative h-[100vh] w-full bg-[url('https://ucarecdn.com/1cc6ac82-f529-4781-865c-8f408251b49f/')] bg-cover bg-center">
          <div className="w-full h-full">
            <video autoPlay muted loop className="w-full h-full object-cover">
              <source src="/videos/night-cityscape.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center bg-[url('https://ucarecdn.com/1cc6ac82-f529-4781-865c-8f408251b49f/')] bg-cover bg-center bg-blend-overlay">
            <svg
              className="w-[80%] md:w-[60%] lg:w-[50%] h-auto"
              viewBox="0 0 400 100"
            >
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                className="text-4xl md:text-5xl lg:text-6xl font-bold fill-transparent stroke-white whitespace-pre-wrap break-words w-full"
                style={{
                  strokeWidth: "1px",
                  strokeDasharray: "100%",
                  animation:
                    "drawText 3s linear forwards, glowText 2s ease-in-out infinite alternate",
                  filter: "url(#glow)",
                }}
              >
                test Company
              </text>
            </svg>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 py-16 overflow-hidden">
          <div
            className="flex"
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
            <div className="flex-none w-[300px] space-y-6 mx-4">
              <h2 className="text-3xl font-bold">PHILO</h2>
              <p className="text-gray-600">新しい価値を創造する。</p>
              <img
                src="/images/philo.jpg"
                alt="企業理念を表現した画像"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <button className="px-6 py-2 border border-black hover:bg-black hover:text-white transition">
                MORE
              </button>
            </div>
            <div className="flex-none w-[300px] space-y-6 mx-4">
              <h2 className="text-3xl font-bold">SERV</h2>
              <p className="text-gray-600">私たちの取り組みとして</p>
              <img
                src="/images/service.jpg"
                alt="サービスを表現した画像"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <button className="px-6 py-2 border border-black hover:bg-black hover:text-white transition">
                MORE
              </button>
            </div>
            <div className="flex-none w-[300px] space-y-6 mx-4">
              <h2 className="text-3xl font-bold">TECH</h2>
              <p className="text-gray-600">最新技術への取り組み</p>
              <img
                src="/images/tech.jpg"
                alt="技術を表現した画像"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <button className="px-6 py-2 border border-black hover:bg-black hover:text-white transition">
                MORE
              </button>
            </div>
            <div className="flex-none w-[300px] space-y-6 mx-4">
              <h2 className="text-3xl font-bold">VISION</h2>
              <p className="text-gray-600">未来への展望</p>
              <img
                src="/images/vision.jpg"
                alt="ビジョンを表現した画像"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <button className="px-6 py-2 border border-black hover:bg-black hover:text-white transition">
                MORE
              </button>
            </div>
            <div className="flex-none w-[300px] space-y-6 mx-4">
              <h2 className="text-3xl font-bold">PHILO</h2>
              <p className="text-gray-600">新しい価値を創造する。</p>
              <img
                src="/images/philo.jpg"
                alt="企業理念を表現した画像"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <button className="px-6 py-2 border border-black hover:bg-black hover:text-white transition">
                MORE
              </button>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12">PARTNER COMPANIES</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {Array.from({ length: 12 })
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="bg-white p-4 flex items-center justify-center"
                  >
                    <div className="w-24 h-12 bg-gray-200"></div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12">NEWS</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Array.from({ length: 6 })
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="border border-gray-200 hover:shadow-lg transition"
                >
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-4">
                    <p className="text-sm text-gray-500">2024.01.01</p>
                    <p className="mt-2">ニュースタイトルが入ります</p>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-sm">
            © 2024 AI COMMUNICATION. All Rights Reserved.
          </p>
        </div>
      </footer>
      <style jsx global>{`
        @keyframes drawText {
          from {
            stroke-dashoffset: 100%;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes glowText {
          from {
            filter: drop-shadow(0 0 2px #fff) drop-shadow(0 0 4px #fff) drop-shadow(0 0 6px #fff);
          }
          to {
            filter: drop-shadow(0 0 4px #fff) drop-shadow(0 0 8px #fff) drop-shadow(0 0 12px #fff);
          }
        }
      `}</style>
    </div>
  );
}

export default MainComponent;