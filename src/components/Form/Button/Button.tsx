import type React from "react";

export function Button({ children }: React.PropsWithChildren) {
  return <button type="submit">{children}</button>;
}
