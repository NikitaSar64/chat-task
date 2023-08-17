import { FormEvent, RefObject } from "react";

export interface ChatInputProps {
  inputRef: RefObject<HTMLInputElement>;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}
