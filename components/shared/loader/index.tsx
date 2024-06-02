import React from "react";
import "./style.css";
import { cn } from "@/lib/utils";

export default function Loader({
  fullscreen,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { fullscreen?: boolean }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3",
        props.className,
        {
          "h-screen-2 w-screen": fullscreen,
        },
      )}
    >
      <div className={cn("progress")} {...props}></div>
      <p className="animate-pulse uppercase text-muted">Loading</p>
    </div>
  );
}
