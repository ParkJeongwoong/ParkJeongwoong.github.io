import React from "react";
import { useRouter } from "next/router";

const Dynamic = () => {
  const router = useRouter();
  const { pagename } = router.query;
  return <div>hi {pagename}</div>;
};

export default Dynamic;
