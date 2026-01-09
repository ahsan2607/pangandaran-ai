// Static data and UI constants
import { FaHouse, FaBookmark, FaRobot, FaUser } from "react-icons/fa6";

export const FOOTER_HEIGHT = "72px";

export const INITIAL_QUESTIONS = [
  "Berikan daftar penginapan pinggir pantai pangandaran",
  "Makanan khas yang dapat dinikmati di pantai pangandaran",
  "Dimana lokasi money changer di pangandaran?",
  "Berikan daftar pantai-pantai yang ada di pangandaran",
];

export const BEACH_CARDS = [
  { name: "Pantai Pangandaran", price: "Rp 20k", rating: 4.8, img: "/img1.jpg" },
  { name: "Pantai Karapyak", price: "Rp 10k", rating: 4.3, img: "/img2.jpg" },
  { name: "Pantai Batu Hiu", price: "Rp 15k", rating: 4.5, img: "/img3.jpg" },
];

export const FOOTER_MENU_ITEMS = [
  { icon: <FaHouse />, label: "Home", href: "/home" },
  { icon: <FaBookmark />, label: "Saved", href: "/wishlist" },
  { icon: <FaRobot />, label: "Chatbot", href: "/chatbot" },
  { icon: <FaUser />, label: "Profile", href: "/profile" },
];
