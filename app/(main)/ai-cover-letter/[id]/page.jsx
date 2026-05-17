import React from "react";

const CoverLetter = async ({ params }) => {
  const { id } = await params;

  return <div>Cover letter: {id}</div>;
};

export default CoverLetter;
