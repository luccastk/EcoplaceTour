import type React from "react";
import { radii } from "../../theme/radii";

export function Box({ children }: React.PropsWithChildren) {
  return (
    <div
      style={{ background: "rgba(255, 255, 255, 0.2)", borderRadius: radii.md }}
    >
      {children}
    </div>
  );
}
