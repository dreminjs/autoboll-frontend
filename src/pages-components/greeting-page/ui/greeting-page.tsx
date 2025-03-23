import { InfoList } from "@/features/info-list";
import { GreetingTitle } from "@/features/title";

export const GreetingPage = () => {
  return (
    <div>
      <GreetingTitle />
      <InfoList
        articles={[
          {
            title: "оплата",
            content:
              "у нас доступны Наличный и безналичный расчет по карточке.",
          },
          {
            title: "Доставка",
            content:
              "по Беларуси, а также во все регионы России и Казахстана (Сдек, Энергия).",
          },
        ]}
      />
    </div>
  );
};
