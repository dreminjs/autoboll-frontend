import Image from "next/image";
import Logo from "../../../../public/header-logo.png";
import Link from "next/link";
import { Navigation, NavigationBurger } from "@/features/navigation";
import { Container } from "@/shared";

export const Header = () => {
  return (
    <header className="flex justify-center sm:bg-[#ffffff85] bg-opacity-50 sm:mb-[50px]">
      <Container>
        <Link href={"/"}>
          <Image alt="logo" className="h-[52px] w-[52px] sm:h-[70px] sm:w-[70px] md:h-[100px] md:w-[100px]" src={Logo} />
        </Link>
        <Navigation />
        <NavigationBurger />
      </Container>
    </header>
  )
}
