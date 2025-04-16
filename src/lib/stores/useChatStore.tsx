import { create } from "zustand";

export interface Message {
  id: string;
  text: string;
  sender: string;
  timestamp: Date;
}

interface ChatState {
  messages: Message[];
  addMessage: (msg: Message) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  addMessage: (msg) => set((state) => ({ messages: [...state.messages, msg] })),
}));
