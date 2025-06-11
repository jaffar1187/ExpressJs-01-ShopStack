const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Node Js</title></head>");
    res.write(
      "<body><form action='/message' method='post'><input type='text' name='message'><button>Send</button></form></body>"
    );
    res.write("<html>");
    return res.end();
  } else if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      console.log(body);
      const parsedBody = Buffer.concat(body).toString();
      const data = parsedBody.split("=")[1];
      fs.writeFile("message.txt", data, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Node Js</title></head>");
    res.write("<body><h1>Hello From Nodejs</h1></body>");
    res.write("<html>");
    res.end();
  }
};

module.exports = { requestHandler };
