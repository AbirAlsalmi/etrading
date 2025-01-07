import Image from 'next/image';

export default function Logo({ className = "", size = "medium" }) {
  const sizes = {
    small: "w-12 h-12",
    medium: "w-16 h-16",
    large: "w-24 h-24",
    xlarge: "w-32 h-32"
  };

  return (
    <div className={`relative ${sizes[size]} ${className}`}>
      <Image
        src="/images/logo.png" // Make sure to add your logo image to public/images/
        alt="E Trading Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
} 