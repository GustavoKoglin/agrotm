import { Dispatch, SetStateAction } from "react";

export interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export interface ChatComponentProps {
  setIsOpenChat: Dispatch<SetStateAction<boolean>>;
}
