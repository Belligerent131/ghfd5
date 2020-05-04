const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

const cors = require("cors")({ origin: true });

exports.createUser = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    return admin
      .auth()
      .createUser({
        email: req.body.email,
        password: req.body.password,
      })
      .then((userRecord) => {
        console.log("user created successfully!");
        res.status(200).send({
          codee: 1,
          message: "success!",
          userRecord: userRecord,
        });
      })
      .catch((error) => {
        console.log("there was an error...");
        res.status(400).send({
          code: 2,
          message: "Error was detected...",
        });
      });
  });
});
