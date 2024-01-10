import Image from "next/image";
import logoImg from "@/public/assets/images/logo.svg";

const Footer = () => {
  return (
    <div className="border-t">
      <div className="wrapper flex items-center justify-between ">
        <Image src={logoImg} width={136} alt="logo img" />
        <p className="font-semibold">2024 Evently. All Rights reserved.</p>
        <h1 className="font-medium">Mahmoud Salah</h1>
      </div>
    </div>
  );
};
export default Footer;
