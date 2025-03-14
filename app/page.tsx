import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-6xl mb-4">Home Page</h1>
      <Link href="/dashboard">
        <h1 className="bg-neutral-800 w-40 rounded-md mt-8 h-12 flex items-center justify-center">
          Go to Dashboard
        </h1>
      </Link>
    </div>
  );
}
