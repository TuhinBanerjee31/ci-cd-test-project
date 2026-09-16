"use client";

import { useState } from "react";

export default function Home() {
  const [accepted, setAccepted] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 62, y: 58 });

  const moveNoButton = () => {
    if (accepted) return;

    const nextX = 14 + Math.random() * 58;
    const nextY = 18 + Math.random() * 52;
    setNoPosition({ x: nextX, y: nextY });
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_#fff4f7,_#ffe8f0_30%,_#f7d7e6_70%,_#f1c2d7_100%)] px-4 py-10 text-slate-800">
      <section className="w-full max-w-xl rounded-[32px] border border-white/60 bg-white/70 p-6 shadow-[0_30px_80px_rgba(140,80,115,0.18)] backdrop-blur-md sm:p-10">
        {!accepted ? (
          <>
            <div className="mb-6 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-pink-500">
                Pujo vibes
              </p>
              <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
                Will you be my pujo partner?
              </h1>
            </div>

            <div className="relative mx-auto mt-8 h-52 w-full max-w-md overflow-hidden rounded-3xl border border-pink-100 bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.92),_transparent_62%)]" />

              <button
                type="button"
                onClick={() => setAccepted(true)}
                className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-3 text-lg font-bold text-white shadow-lg shadow-pink-200 transition-transform hover:scale-105"
              >
                Yes
              </button>

              <button
                type="button"
                onMouseEnter={moveNoButton}
                onClick={moveNoButton}
                className="absolute rounded-full border border-slate-200 bg-white px-5 py-3 text-lg font-semibold text-slate-700 shadow-md transition-all duration-200 hover:bg-slate-50"
                style={{
                  left: `${noPosition.x}%`,
                  top: `${noPosition.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                No
              </button>
            </div>

            <p className="mt-6 text-center text-sm text-slate-600">
              The answer is obvious. Just say yes, and let&apos;s make this Pujo unforgettable.
            </p>
          </>
        ) : (
          <div className="text-center">
            <div className="mb-4 text-5xl">💖🎉</div>
            <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">
              Yaaay! We&apos;re on!
            </h2>
            <div className="mx-auto mt-6 max-w-md rounded-3xl border border-pink-200 bg-pink-50 p-6 text-left shadow-inner shadow-pink-100">
              <p className="text-lg leading-8 text-slate-700">
                You just made this Pujo even more special. I&apos;m so happy to have you as my partner for all the adda, food, and festive memories.
              </p>
              <p className="mt-4 text-base font-medium text-pink-600">
                Let&apos;s make this season full of smiles, laughter, and a little extra magic together.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setAccepted(false)}
              className="mt-8 rounded-full border border-pink-300 bg-white px-5 py-2.5 text-sm font-semibold text-pink-600 transition hover:bg-pink-50"
            >
              Start over
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
