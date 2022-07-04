const app = require("express")();

const bodyParser = require("body-parser");
const cors = require("cors");
const { OAuth2Client } = require("google-auth-library");

app.use(bodyParser.json());
app.use(cors());

const CLIENT_ID =
  "656892509205-bh1n3qjetjhoa4cnipegrts720ntb6o4.apps.googleusercontent.com";

const googleClient = new OAuth2Client({
  clientId: CLIENT_ID,
});

async function verifyGoogleLogin(token) {
  const ticket = await googleClient.verifyIdToken({
    audience: CLIENT_ID,
    idToken: token,
  });

  const payload = ticket.getPayload();

  if (payload) {
    return payload;
  }

  return null;
}

app.post("/login", async (req, res) => {
  console.log(req.body);

  const { provider, response } = req.body;

  if (provider === "apple") {
    console.log("apple");
  } else if (provider === "google") {
    // Perform validation for google⁄
    // 2ways
    // 1.Send he idToken to some google domain to verify - a quick but slow and network based solution
    // 2.Actually verifying it yourself
    const { idToken } = response;

    const res = await verifyGoogleLogin(idToken);

    if (!res) {
      console.error("Falló el Login con Google");
      return;
    }
    console.log(
      "Sign In with google successful and validated and legit and valid",
      res
    );
  }

  res.json({ status: "ok" });
});

app.listen(12321, () => {
  console.log("Server listo");
});
