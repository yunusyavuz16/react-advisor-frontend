import { Chat } from ".";

interface ChatHistory {
  messages: Chat[];
  per_page: number;
  page: number;
}

interface ChatCompletionResponse {
  full_response: FullResponse;
  response: string;
}

interface FullResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  usage: Usage;
  choices: Choice[];
  system_fingerprint: string;
}

interface Choice {
  index: number;
  finish_reason: string;
  logprobs: null | Logprobs; // Assuming logprobs could be detailed in some cases
  message: ChoiceMessage;
}

interface ChoiceMessage {
  role: string;
  content: string;
}

interface Usage {
  prompt_time: number;
  completion_time: number;
  queue_time: number;
  total_time: number;
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
}

interface Logprobs {
  // If logprobs is defined, include the relevant details
}

interface XGroq {
  id: string;
}

export type {
  ChatCompletionResponse,
  FullResponse,
  Choice,
  Usage,
  Logprobs,
  XGroq,
  ChatHistory,
};
