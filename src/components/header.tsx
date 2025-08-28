import config from "@/constants/config";
import * as motion from "motion/react-client";

export default function Header() {
  return (
    <header
      className="flex justify-between font-mono items-start w-full py-4 text-gray-600"
      id="top"
    >
      <motion.a
        href="/"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        style={{
          width: 24,
          height: 24,
          backgroundColor: "#6d28d9",
          borderRadius: 5,
          display: "block",
        }}
      />
      <div className="flex items-center gap-2 underline text-sm">
        {/* Explicit links to control routing vs external */}
        <a href={config.HEADER.contact}>CONTACT</a>
        <a href={config.HEADER.linkedin} target="_blank" rel="noreferrer">
          LINKEDIN
        </a>
        <a href={config.HEADER.github} target="_blank" rel="noreferrer">
          GITHUB
        </a>
      </div>
    </header>
  );
}
