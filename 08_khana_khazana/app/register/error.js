"use client"; // Error components must be Client Components

import { useRouter } from "next/navigation";

export default function Error({ error, reset }) {
  const router = useRouter();

  return (
    <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
            <span className="sr-only">Something is Wrong!</span>
          </h2>

          <p className="mt-4 mb-8 dark:text-gray-600">
            All Fields are required and Unique
          </p>
          <button
            onClick={() => {
              reset();
              router.push("/register");
            }}
            rel="noopener noreferrer"
            href="#"
            className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
          >
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
}
