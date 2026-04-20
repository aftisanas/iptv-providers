"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ComponentPropsWithoutRef,
  MouseEvent,
  forwardRef,
} from "react";

type SectionLinkProps = Omit<ComponentPropsWithoutRef<typeof Link>, "href"> & {
  href: string;
};

const SectionLink = forwardRef<HTMLAnchorElement, SectionLinkProps>(
  function SectionLink({ href, onClick, children, ...rest }, ref) {
    const pathname = usePathname();

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
      onClick?.(e);
      if (e.defaultPrevented) return;
      if (
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      const hashIndex = href.indexOf("#");
      if (hashIndex < 0) return;

      const targetId = href.slice(hashIndex + 1);
      if (!targetId) return;

      const targetPath = href.slice(0, hashIndex) || "/";

      if (pathname !== targetPath) return;

      e.preventDefault();
      const el = document.getElementById(targetId);
      const cleanUrl = `${targetPath === "/" ? "" : targetPath}#${targetId}`;
      window.history.replaceState(null, "", cleanUrl || `/#${targetId}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    return (
      <Link href={href} onClick={handleClick} ref={ref} {...rest}>
        {children}
      </Link>
    );
  }
);

export default SectionLink;
