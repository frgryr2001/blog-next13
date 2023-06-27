'use client'; // Error components must be Client Components

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex justify-center gap-4">
      <h2 className="text-xl font-bold md:text-2xl ">Something went wrong!</h2>
      <button
        className="p-2 rounded-md bg-slate-900 hover:bg-slate-700 "
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
