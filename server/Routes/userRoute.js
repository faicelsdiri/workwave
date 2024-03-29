const express = require("express");
const router = express.Router();
const User = require("../Models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const isAuth = require("../Middleware/isAuth");

router.post("/register", async (req, res) => {
  try {
    const {
      email,
      motDePasse,
      profilPicture,
      typeuser,
      phoneNumbre,
      Adress,
      societe,
      employe,
    } = req.body;
    let user = await User.findOne({ email: email });
    if (user) {
      res.send({ msg: "Existed user" });
    } else {
      const newUser = new User({
        email,
        motDePasse,
        profilPicture,
        typeuser,
        phoneNumbre,
        Adress,
        societe,
        employe,
      });
      const saltRounds = 10;
      const cryptedPassword = await bcrypt.hash(motDePasse, saltRounds);
      newUser.motDePasse = cryptedPassword;
      await newUser.save();
      const payload = {
        id: newUser._id,
      };
      const token = await jwt.sign(payload, "jhvbekvbkeubv", {
        expiresIn: "24h",
      });
      res.send({ msg: "user created !", newUser, token });
    }
  } catch (err) {
    console.error(err, "server error");
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, motDePasse } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.send({ msg: "user not found" });
    } else {
      const isMatch = await bcrypt.compare(motDePasse, user.motDePasse);
      if (!isMatch) {
        res.send({ msg: "Bad password" });
      } else {
        const payload = {
          id: user._id,
        };
        const token = await jwt.sign(payload, "jhvbekvbkeubv", {
          expiresIn: "24h",
        });
        res.send({ msg: "User connected", user, token });
      }
    }
  } catch (err) {
    console.error(err, "server error");
  }
});
router.get("/isAuth", isAuth, async (req, res) => {
  res.send({ user: req.user });
});

const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { log } = require("console");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.post("/", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  res.send(`/uploads/${req.file.filename}`);
});



router.get("/images/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send("User not found");
    }

    if (!user.profilPicture) {
      return res.status(404).send("User does not have an image");
    }

    const normalizedPath = path.normalize(user.profilPicture);
    const filePath = path.join(__dirname, "..", normalizedPath);

    console.log("User Image Path:", user.profilPicture);
    console.log("Normalized Path:", normalizedPath);
    console.log("Full File Path:", filePath);

    if (fs.existsSync(filePath)) {
      res.sendFile(filePath);
    } else {
      res.status(404).send("Image not found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});

router.get("/test-image", (req, res) => {
  const testFilePath = path.join(
    __dirname,
    "..",
    "uploads",
    "1691140790778.jpg"
  );
  res.sendFile(testFilePath);
});







module.exports = router;
// const multer = require('multer');

// const path = require('path');
// const fs = require('fs');

// const storage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, './uploads/');
//   },
//   filename(req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage });

// router.post('/uploads', upload.single('image'), (req, res) => {
//   res.send(`./${req.file.path}`);
// });

// router.get('/images/:userId', async (req, res) => {
//   const { userId } = req.params;

//   try {
//     // Find the user by their ID
//     const user = await User.findById(userId);

//     if (!user) {
//       return res.status(404).send('User not found');
//     }
// console.log(user.profilPicture)
//     // Check if the user has an image
//     if (!user.profilPicture) {
//       return res.status(404).send('User does not have an image');
//     }

//     const filePath = path.join(__dirname, 'uploads', user.profilPicture);

//     // Check if the file exists
//     if (fs.existsSync(filePath)) {
//       // Serve the file
//       res.sendFile(filePath);
//     } else {
//       // File not found
//       res.status(404).send('Image not found');
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Internal server error');
//   }
// });
