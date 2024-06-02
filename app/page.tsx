import PostCard from "@/components/shared/post-card";
import { getPosts } from "@/services";
import React from "react";

export default async function Home() {
  const posts = await getPosts();

  return (
    <section className="container grid grid-cols-4 p-4">
      <div className="col-span-3 flex flex-col gap-4">
        {posts.map((post, i) => (
          <PostCard key={i} data={post} />
        ))}
      </div>
      <aside className="col-span-1"></aside>
    </section>
  );
}
