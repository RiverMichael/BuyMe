import { useEffect, useState } from "react";
import NavBar from "../../NavBar";

export default function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (window.innerWidth >= 1024) {
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    } else {
      setVisible(true);
    }
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <header className={`bg-ghost-white sticky top-0 z-40 transition-all ease-in-out duration-300 ${visible ? "" : "-translate-y-full"}`}>
      <NavBar />
    </header>
  );
}
