import Link from "next/link";
import React from "react";

export default function AllProductspage() {
  return (
    <div>
      <Link href="/dashboard/all-products/product">
        <div className="border border-neutral-800 rounded-lg h-40 w-72 text-center pt-4 mt-6">
          <h1> This is the all products page</h1>
        </div>
      </Link>
    </div>
  );
}
