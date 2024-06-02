"use client"
import React from "react";
import MDPreview, {
  MarkdownPreviewProps as MDProps,
} from "@uiw/react-markdown-preview";

interface MarkdownPreviewProps extends MDProps {
  label?: string;
  withStyle?: boolean;
}

export default function MarkdownPreview({
  source,
  label,
  withStyle = true,
  ...props
}: MarkdownPreviewProps) {
  return (
    <div>
      <p className="text-text font-bold">{label}</p>
      <div className={withStyle ? "default-form-input" : ""}>
        <MDPreview
          wrapperElement={{ "data-color-mode": "dark" }}
          style={{ background: "inherit" }}
          source={source}
          {...props}
        />
      </div>
    </div>
  );
}
