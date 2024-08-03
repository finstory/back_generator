import { PayloadAction } from "@reduxjs/toolkit";

export type BaseAction<T, Payload = any> = (state: T, action: PayloadAction<Payload>) => void;