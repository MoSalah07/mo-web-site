import React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

function CustomeLinksPages({ href, title, pathname = "/" }) {
  return (
    <Link
      className={`capitalize relative after:absolute after:bottom-[-10px] after:left-0 ${
        pathname === href ? `after:w-full` : `after:w-0`
      } after:h-[2px] after:bg-white after:duration-150 after:transition-all after:ease-in-out hover:after:w-full`}
      href={href}
    >
      {title}
    </Link>
  );
}

function LinksPages() {
  const pathname = usePathname();

  return (
    <ul className="hidden sm:flex items-center gap-4">
      <CustomeLinksPages href={`/`} title={`Home`} pathname={pathname} />
      <CustomeLinksPages href={`/about`} title={`About`} pathname={pathname} />
      <CustomeLinksPages
        href={`/projects`}
        title={`Projects`}
        pathname={pathname}
      />
      <CustomeLinksPages
        href={`/skills`}
        title={`Skills`}
        pathname={pathname}
      />
    </ul>
  );
}

export default LinksPages;
