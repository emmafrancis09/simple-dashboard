import Link from "next/link";
import React from "react";

export default function Dashboardpage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl text-center">Dashboard</h1>
      <div className="flex gap-4">
        <Link href="/dashboard/all-products">
          <div className="border border-neutral-800 rounded-lg h-40 w-52 text-center pt-4 mt-6">
            <h1>All Products Page</h1>
          </div>
        </Link>
        <Link href="/dashboard/specific-products">
          <div className="border border-neutral-800 rounded-lg h-40 w-52 text-center pt-4 mt-6">
            <h1>Specific Products Page</h1>
          </div>
        </Link>
      </div>
      <Link href="/">
        <h1 className="bg-neutral-800 w-32 rounded-md mt-8 h-8 flex items-center justify-center">
          Back Home
        </h1>
      </Link>
    </div>
  );
}
