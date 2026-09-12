export function BrandMark({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="10" className="fill-kelp" />
      <path
        d="M9 23.5c0-1.6 1.2-2.8 2.8-2.8h16.4c1.6 0 2.8 1.2 2.8 2.8V28H9v-4.5Z"
        className="fill-none stroke-kelp-fg"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M12 20.7V18c0-1.4 1.1-2.5 2.5-2.5h11c1.4 0 2.5 1.1 2.5 2.5v2.7"
        className="fill-none stroke-kelp-fg"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M9 28v2.2M31 28v2.2" className="stroke-kelp-fg" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
