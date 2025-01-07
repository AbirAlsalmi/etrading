import { FaInstagram, FaWhatsapp, FaTiktok, FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-6">
            <h3 className="text-white/90 text-lg font-bold mb-4 text-center">تواصل معنا</h3>
            <div className="flex gap-8 items-center">
              <a
                href="https://www.instagram.com/etrading.om/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary transition-colors duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="http://wa.me/96877118989"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary transition-colors duration-300"
              >
                <FaWhatsapp size={24} />
              </a>
              <a
                href="mailto:Osool@etradinginvest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary transition-colors duration-300"
              >
                <MdEmail size={26} />
              </a>
              <a
                href="https://x.com/etrading_om"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary transition-colors duration-300"
              >
                <FaXTwitter size={22} />
              </a>
              <a
                href="https://www.tiktok.com/@etrading_om"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary transition-colors duration-300"
              >
                <FaTiktok size={22} />
              </a>
            </div>
          </div>
          <div className="text-center">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} E Trading. جميع الحقوق محفوظة
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 