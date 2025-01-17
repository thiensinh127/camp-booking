import { Link, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
interface Article {
  image: string;
  title: string;
  link: string;
  date: string;
}
export default function AnimatedArticle({
  article,
  index,
}: {
  article: Article;
  index: number;
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <article
      ref={ref}
      className={`group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-700 ease-in-out ${
        inView
          ? `opacity-100 translate-x-0`
          : index % 2 === 0
          ? `opacity-0 -translate-x-10`
          : `opacity-0 translate-x-10`
      }`}
    >
      {/* Image Container */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4 line-clamp-2 group-hover:text-green-700 transition-colors">
          {article.title}
        </h3>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{article.date}</span>
          <Link
            href={article.link}
            className="inline-flex items-center text-green-700 hover:text-green-800 font-medium transition-colors gap-1 group-hover:gap-2"
          >
            Read
            <ArrowRight className="w-4 h-4 transition-all" />
          </Link>
        </div>
      </div>
    </article>
  );
}
