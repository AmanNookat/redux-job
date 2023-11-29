import React from "react";

interface BaseChatGptProps {
  title?: string;
  children: React.ReactNode;
}

const BaseChatGpt: React.FC<BaseChatGptProps> = ({ title, children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>{title}</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        {/* Additional styles can be added through props or another method */}
      </head>
      <body>
        {children}
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
        {/* Additional scripts can be added through props or another method */}
      </body>
    </html>
  );
};

export default BaseChatGpt;
