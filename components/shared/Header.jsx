import logoImg from "@/public/assets/images/logo.svg";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton, UserProfile } from "@clerk/nextjs";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
const Header = () => {
  return (
    <section className="border-b">
      <div className="wrapper flex items-center justify-between">
        {/* LOGO */}
        <div className="w-36">
          <Image src={logoImg} alt="logo img" />
        </div>
        {/* LOged In  */}

        <div className="hidden md:block">
          <SignedIn>
            <NavItems />
          </SignedIn>
        </div>

        {/* logged In Mobile Nav  */}
        <div className="md:hidden flex items-center justify-between gap-5">
          <UserButton />

          <div className="">
            <SignedIn>
              <MobileNav />
            </SignedIn>
          </div>
        </div>
        <div className="hidden md:block">
          <UserButton />
        </div>

        {/* loged Out  */}
        <SignedOut>
          <div>
            <Button
              className={
                "bg-primary rounded-full min-w-28 text-md font-semibold tracking-wide"
              }
            >
              <Link href={"/sign-in"}>Login</Link>
            </Button>
          </div>
        </SignedOut>
      </div>
    </section>
  );
};
export default Header;
