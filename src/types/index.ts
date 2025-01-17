export interface Message {
  id: string;
  text: string;
  isAppropriate?: boolean;
  isAI: boolean;
}

export interface Chat {
  id: string;
  role: string;
  content: string;
  timestamp: string;
}


