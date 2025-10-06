import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post("/webhook", (req, res) => {
  console.log("Received alert:", req.body);

  const { action, pair, entry } = req.body;

  if (action === "BUY") {
    console.log(`🟢 Buying ${pair} at ${entry}`);
    // TODO: Add OKX API call here
  } else if (action === "SELL") {
    console.log(`🔴 Selling ${pair} at ${entry}`);
    // TODO: Add OKX API call here
  } else {
    console.log("⚪ Unknown action");
  }

  res.json({ status: "OK" });
});

app.get("/", (req, res) => {
  res.send("TradingView Webhook Bot is running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
