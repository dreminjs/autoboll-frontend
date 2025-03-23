import { NavItem } from "@/entities/navigation";
import { items as navItems } from "../model/data";

export const Navigation = () => {
  return (
    <nav>
      <ul className="items-center hidden gap-[5px] lg:gap-[25px] md:flex ">
        {navItems.map((el, idx) => (
          <NavItem key={idx} {...el} />
        ))}
      </ul>
    </nav>
  );
};
