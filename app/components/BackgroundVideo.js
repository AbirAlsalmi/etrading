export default function BackgroundVideo() {
    return (
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/poster.jpg"
          className="w-full h-full object-cover"
        >
          <source src="/videos/background.webm" type="video/webm" />
          <source src="/videos/background.mp4" type="video/mp4" />
        </video>
      </div>
    );
  } 