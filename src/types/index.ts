import { ReactNode } from "react";

export type TRoute = {
  path: string;
  element: ReactNode;
};

export type TSideBarItem = {
  key: string;
  label: ReactNode;
  children?: TSideBarItem[];
};
