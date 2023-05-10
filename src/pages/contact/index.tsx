import React from "react";
import Link from "next/link";

export default function index() {
  return (
    <div>
      <p className="text-red-500">index</p>
      <Link href="/about">About</Link>
      <p>Hello Next.js</p>
    </div>
  );
}
