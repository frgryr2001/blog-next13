export default function Loading() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <svg
        className="w-6 h-6 text-white animate-spin"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8"
        />
      </svg>
    </div>
  );
}
