import { Helmet } from "react-helmet-async";

const FontsHelmet = () => {
  return (
    <Helmet>
      {/* Google Fonts - Only Roboto */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};

export default FontsHelmet;
