import React from "react";
import "./style.css";
import { cn } from "@/lib/utils";

export default function Loader({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("progress", props.className)} {...props}></div>;
}
