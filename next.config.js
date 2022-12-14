module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://ancient-archeology.com/",
        permanent: true,
      },
      // {
      //   source: "/:slug",
      //   destination: "https://ancient-archeology.com/:slug",
      //   permanent: true,
      // },
    ];
  },
};
