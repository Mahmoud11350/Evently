import { navItems } from "@/lib/navitems";
import Link from "next/link";
import NavLink from "./NavLink";

const NavItems = () => {
  return (
    <ul className="flex justify-between md:items-center flex-col md:flex-row gap-5 capitalize text-md font-semibold">
      {navItems.map((item) => {
        return (
          <li key={item.path}>
            <NavLink href={item.path}>{item.name}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};
export default NavItems;
