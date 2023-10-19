import React from "react";
import Link from "next/link";

function Logo() {
  return (
    <Link href={`/`} className="text-logo">
      MoSalah
    </Link>
  );
}

export default Logo;
