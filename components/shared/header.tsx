import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";

export default function Header() {
  return (
    <header className="grid h-16 grid-cols-3 items-center bg-secondary px-8 text-secondary-foreground shadow-lg">
      <h1 className="text-2xl font-bold capitalize">
        <Link href="/?source=header">
          Developer <span className="uppercase text-primary">Log</span>
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link
              className={buttonVariants({ variant: "ghost" })}
              href="/?source=header"
            >
              My Feed
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
