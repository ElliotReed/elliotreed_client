export interface Mode {
  mode: "sign-in" | "create-account"
}

export type ActionData = { error: string } | null;