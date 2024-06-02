import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { CiChat1, CiHeart, CiRead, CiShare2 } from "react-icons/ci";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { IPostProps } from "@/types";

interface PostCardProps extends React.HTMLAttributes<HTMLAnchorElement> {
  data: IPostProps;
}

export default function PostCard({ data, ...props }: PostCardProps) {
  return (
    <Link
      href={`/posts/${data.slug}`}
      className="grid max-h-80 grid-rows-4 gap-4 rounded-xl border-2 border-secondary p-4"
      {...props}
    >
      <div className="row-span-1 flex items-center gap-2">
        <Avatar>
          <AvatarImage src={data.author.photo.url} />
          <AvatarFallback>{data.author.name.substring(0, 2)}</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="font-bold">{data.author.name}</h2>
          <p className="text-xs text-gray-500">
            {new Date(data.createdAt).toDateString()}
          </p>
        </div>
      </div>
      <div className="row-span-3 grid grid-cols-5 gap-4 md:flex-row-reverse">
        <div className="col-span-3 grid">
          <div>
            <h3 title={data.title} className="line-clamp-2 text-xl font-bold">
              {data.title}
            </h3>
            <p title={data.excerpt} className="line-clamp-3">
              {data.excerpt}
            </p>
          </div>
          <div>
            <Link
              href=":id#comments"
              className={buttonVariants({ variant: "transparent" })}
            >
              <CiChat1 className="text-xl" />
              <span className="ml-2">Comment</span>
            </Link>
            <Button variant="transparent">
              <CiShare2 className="text-xl" />
              <span className="ml-2">Share</span>
            </Button>
            <div className={buttonVariants({ variant: "transparent" })}>
              <CiHeart className="text-xl" />
              <span className="ml-2">10</span>
            </div>
            <div className={buttonVariants({ variant: "transparent" })}>
              <CiRead className="text-xl" />
              <span className="ml-2">10</span>
            </div>
          </div>
        </div>
        <div className="relative col-span-2">
          <Image
            src={data.image.url}
            alt={data.title}
            className="w-full rounded-xl object-cover"
            fill
          />
        </div>
      </div>
    </Link>
  );
}
