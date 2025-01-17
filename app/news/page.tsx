"use client";

import { Button } from "@/components/ui/button";
import AnimatedArticle from "./CardArticle";

const articles = [
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cRjGq1Wd6rp6gQXUuComAZDhCtN8qT.png",
    title: "Sed nec lorem scelerisque, viverra ex ut, interdum massa.",
    link: "#",
    date: "August 24, 2023",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cRjGq1Wd6rp6gQXUuComAZDhCtN8qT.png",
    title: "Morbi ligula massa, posuere in finibus ut, varius ac ligula.",
    link: "#",
    date: "August 23, 2023",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cRjGq1Wd6rp6gQXUuComAZDhCtN8qT.png",
    title: "Sed nec lorem scelerisque, viverra ex ut, interdum massa.",
    link: "#",
    date: "August 22, 2023",
  },
];

export default function News() {
  return (
    <section className=" bg-[#F7F2DB] pb-16 md:pb-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <p className="text-green-700 font-medium mb-2">News</p>
            <h2 className="text-3xl md:text-4xl font-bold">Latest Articles</h2>
          </div>
          <Button
            variant="default"
            className="bg-green-700 hover:bg-green-800 text-white"
          >
            EXPLORE
          </Button>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <AnimatedArticle key={index} article={article} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
