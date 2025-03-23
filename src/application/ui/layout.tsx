import { Container } from "@/shared";
import { Header } from "@/widgets/header";
import { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[url('../../../public/bg-main.jpg')] bg-center h-screen">
      <Header />
      <Container>{children}</Container>
    </div>
  );
}
