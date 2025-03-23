import { FC, PropsWithChildren } from "react";

export const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="basis-[1700px] flex justify-between items-center py-[15px] px-[30px]">
      {children}
    </div>
  );
};
