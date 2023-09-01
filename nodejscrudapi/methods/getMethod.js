module.exports = (req, res) => {
  if (req.url === "/api/movies") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(req.movies));
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    // res.write(JSON.stringify({error:'Not found'}));
    res.end(JSON.stringify({ error: "Not found" }));
  }
};
