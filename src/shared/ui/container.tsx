import { FC, PropsWithChildren } from "react";

export const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-[1690px] flex justify-between items-center py-[15px] px-[30px]">
      {children}
    </div>
  );
};
