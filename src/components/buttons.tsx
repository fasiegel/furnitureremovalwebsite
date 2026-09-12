import type { ComponentProps } from "react";

const base =
  "inline-flex items-center justify-center gap-2 font-medium transition-[background-color,color,box-shadow,transform,opacity] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kelp";

export function BookLink({
  className = "",
  children = "Book now",
  ...props
}: ComponentProps<"a">) {
  return (
    <a
      {...props}
      className={`${base} bg-book text-book-fg hover:bg-book-hover h-12 px-5 text-base rounded-lg ${className}`}
    >
      {children}
    </a>
  );
}

export function GhostLink({
  className = "",
  children,
  ...props
}: ComponentProps<"a">) {
  return (
    <a
      {...props}
      className={`${base} border border-line bg-transparent text-ink hover:bg-cream h-12 px-5 text-base rounded-lg ${className}`}
    >
      {children}
    </a>
  );
}

export function KelpLink({
  className = "",
  children,
  ...props
}: ComponentProps<"a">) {
  return (
    <a
      {...props}
      className={`${base} bg-kelp text-kelp-fg hover:bg-kelp-hover h-12 px-5 text-base rounded-lg ${className}`}
    >
      {children}
    </a>
  );
}
