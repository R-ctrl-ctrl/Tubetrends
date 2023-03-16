module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/abc",
        destination: "http://localhost:5000/abc",
      },
      {
        source: "/channels",
        destination: "http://localhost:5000/channels",
      },
      {
        source: "/videos_comments",
        destination: "http://localhost:5000/videos_comments",
      },
      {
        source: "/trend_suggestion",
        destination: "http://localhost:5000/trend_suggestion",
      }
      
    ];
  };
  return {
    rewrites,
  };
};