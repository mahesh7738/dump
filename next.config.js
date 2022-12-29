module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://archaeologyworlds.com/",
        permanent: true,
      },
      // {
      //   source: "/:slug",
      //   destination: "https://archaeologyworlds.com/:slug",
      //   permanent: true,
      // },
    ];
  },
};
