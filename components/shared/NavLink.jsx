"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ children, href }) => {
  const pathname = usePathname();
  const isActive = pathname == href;
  return (
    <Link
      href={href}
      className={`${isActive ? "bg-primary py-2 px-4 rounded text-white" : ""}`}
    >
      {children}
    </Link>
  );
};
export default NavLink;
