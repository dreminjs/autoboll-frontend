import Link from "next/link";
import { FC } from "react";
import { INavItem } from "..";
import { useRouter } from "next/router";

export const NavItem: FC<INavItem> = ({ label, href }) => {
  const router = useRouter();

  const backgroundColor = router.asPath === href ? "bg-[#3F5484]" : "bg-[#768BA7]";

  return (
    <li>
      <Link
        href={href}
        className={`text-[white] ${backgroundColor} text-[14px] py-[17px] px-[15px] rounded-[25px] min-[900px]:px-[30px] min-[1230px]:px-[40px] xl:px-[60px] 2xl:px-[80px]`}
      >
        {label.toUpperCase()}
      </Link>
    </li>
  );
};
