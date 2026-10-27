"use client";

import { useRef, useState } from "react";

export function PatientResultsVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play();
      return;
    }

    video.pause();
  }

  return (
    <figure className="relative mt-10 lg:mt-12">
      <video
        ref={videoRef}
        className="h-auto w-full bg-[#EFEFEF]"
        src="/patient-results.mp4"
        width={1920}
        height={1080}
        playsInline
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <button
        type="button"
        onClick={togglePlayback}
        aria-label={
          playing ? "Pause the patient results video" : "Play the patient results video"
        }
        className="absolute inset-0 cursor-pointer"
      >
        {playing ? null : (
          <span className="absolute top-1/2 left-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brown text-cream">
            <svg width="18" height="20" viewBox="0 0 18 20" aria-hidden="true">
              <path d="M0 0v20l18-10L0 0z" fill="currentColor" />
            </svg>
          </span>
        )}
      </button>
    </figure>
  );
}
