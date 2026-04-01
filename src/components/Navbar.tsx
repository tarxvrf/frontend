import { useEffect } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileSidebar({ isOpen, onClose }: Props) {
  // Close pakai ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 font-bold border-b">Menu</div>

        <nav className="flex flex-col p-4 gap-3">
          <a href="/" className="hover:text-blue-500">Home</a>
          <a href="/products" className="hover:text-blue-500">Products</a>
          <a href="/about" className="hover:text-blue-500">About</a>
        </nav>
      </div>
    </>
  );
}