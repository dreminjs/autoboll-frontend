import { INavItem } from "@/entities/navigation";

export const items = [
  { label: "Главная", href: "/" },
  { label: "оплата и доставка", href: "/payment-and-delivery" },
  { label: "запчасти", href: "/all-spare-parts" },
  { label: "о нас", href: "/about-us" },
  { label: "контакты", href: "/contacts" },
] as INavItem[];
