import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import heroImg from "@/public/assets/images/hero.png";

const Hero = () => {
  return (
    <div className="bg-[#F6F8FD]">
      <div className="wrapper grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center">
        <div>
          <h1 className="font-bold text-[40px] leading-[48px] lg:text-[48px] lg:leading-[60px]  xl:text-[58px] xl:leading-[74px]">
            Host, Connect, Celebrate: Your Events, Our Platform!
          </h1>
          <p className="font-normal text-[24px] leading-[36px] my-3">
            Book and learn helpful tips from 3,168+ mentors in world-class
            companies with our global community.
          </p>
          <Button size="lg" className={"rounded-full py-3 text-md"}>
            <Link href={"/"}>Explore Now</Link>
          </Button>
        </div>
        <div className="">
          <Image
            src={heroImg}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
