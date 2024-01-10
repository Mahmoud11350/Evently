import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavItems from "./NavItems";
import Image from "next/image";
import logoImg from "@/public/assets/images/logo.svg";
import menuImg from "@/public/assets/icons/menu.svg";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Image src={menuImg} alt="menu svg" />
      </SheetTrigger>
      <SheetContent>
        <div className="mb-8 border-b ">
          <Image src={logoImg} alt="logo Img" width={160} className="mb-4" />
        </div>
        <NavItems />
      </SheetContent>
    </Sheet>
  );
};
export default MobileNav;
