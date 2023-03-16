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
      }
      
    ];
  };
  return {
    rewrites,
  };
};