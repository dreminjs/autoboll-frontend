import { FC } from "react";

interface IProps {
  articles: { title: string; content: string }[];
}

export const InfoList: FC<IProps> = ({ articles }) => {
  return (
    <ul>
      {articles.map(({ title, content }, idx) => (
        <li className="mb-[25px] w-[285px] " key={idx}>
          <h5 className="text-[25px] font-bold mb-[5px]">{title.toLocaleUpperCase()}</h5>
          <p className="font-bold">{content.toUpperCase()}</p>
        </li>
      ))}
    </ul>
  );
};