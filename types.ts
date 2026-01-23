
export interface Stat {
  value: string;
  label: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
