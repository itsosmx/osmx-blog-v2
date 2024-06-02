import MarkdownPreview from "@/components/shared/markdown-preview";
import Loader from "@/components/shared/loader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getPost } from "@/services";
import Image from "next/image";
import React from "react";

export default async function PostID({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = await getPost(slug);

  if (!post) return <Loader fullscreen />;
  return (
    <div className="container relative">
      <div className="relative aspect-video">
        <Image
          src={post.image.url}
          alt={post.title}
          fill
          className="size-full object-fill"
        />
      </div>
      <h1 className="my-4 text-center text-6xl font-bold">{post.title}</h1>
      <div className="my-4 flex items-center justify-center gap-4">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={post.author.photo.url} />
            <AvatarFallback>{post.author.name.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <h2 className="text-xl font-bold">{post.author.name}</h2>
        </div>
        <p className="text-xl text-gray-500">
          {new Date(post.createdAt).toDateString()}
        </p>
      </div>
      <MarkdownPreview source={post?.content.markdown as any} />
    </div>
  );
}
