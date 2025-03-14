import Link from "next/link";
import React from "react";

export default function Productspage() {
  return (
    <div>
      <Link href="/dashboard/specific-products/specific">
        <div className="border border-neutral-800 rounded-lg h-40 w-72 text-center pt-4 mt-6">
          <h1>This is the specific products page</h1>
        </div>
      </Link>
    </div>
  );
}
