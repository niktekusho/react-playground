"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Breadcrumb() {
  const pathname = usePathname();

  const pathSegments = pathname.split("/");

  return (
    <nav className="border-b border-gray-700 p-4">
      <ol className="flex gap-4">
        {pathname === "/" ? (
          <BreadcrumbItem key={pathname} item={pathname} isLast={true} />
        ) : (
          pathSegments.map((path, index) => (
            <BreadcrumbItem
              key={path}
              item={path}
              isLast={index === pathSegments.length - 1}
            />
          ))
        )}
      </ol>
    </nav>
  );
}

function BreadcrumbItem({ item, isLast }: { item: string; isLast: boolean }) {
  const isRoot = item.length === 0;
  return (
    <li
      className={`text-lg relative rounded-full hover:bg-gray-700 focus-within:underline focus-within:underline-offset-8 px-4 py-2 ${
        isLast
          ? "font-bold"
          : "after:content-['/'] after:ms-5 after:absolute after:text-gray-500"
      }`}
    >
      <Link href={isRoot ? "/" : item} className="focus:outline-none">
        {isRoot ? "Home" : capitalize(item)}
      </Link>
    </li>
  );
}

function capitalize(str: string) {
  const split = str.split(" ");
  return split
    .map(
      (segment) => `${segment.at(0)?.toLocaleUpperCase()}${segment.slice(1)}`
    )
    .join(" ");
}
