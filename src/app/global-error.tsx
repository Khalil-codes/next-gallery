"use client";

import Error from "next/error";
import React from "react";

const GlobalErrorHandler = ({ error }: { error: unknown }) => {
  console.error(error);
  return (
    <html>
      <body>
        <Error statusCode={500} title="Error" />
      </body>
    </html>
  );
};

export default GlobalErrorHandler;
