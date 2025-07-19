const express = require("express");
const User = require("./user.model");
const generateToken = require("../middleware/generateToken");
const router = express.Router();

// ===================== REGISTER ROUTE =====================
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ email, username, password });
    await user.save();
    res.status(201).send({ message: "User registered successfully...!" });
    //console.log(req.body);
  } catch (error) {
    console.log("Error registering user", error);
    res.status(500).send({ message: "Error registering user" });
  }
});

// ===================== LOGIN ROUTE =====================
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).send({ message: "Password Not Match" });
    }

    const token = await generateToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    });

    res.status(200).send({
      message: "Logged in successfully",
      token,
      user: {
        _id: user._id,
        email: user.email,
        username: user.username,
        role: user.role,
        profileImage: user.profileImage,
        bio: user.bio,
        profession: user.profession,
      },
    });
  } catch (error) {
    console.log("Error Logged in user", error);
    res.status(500).send({ message: "Error Logged in user" });
  }
});

// ===================== LOGOUT ROUTE =====================
router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.status(200).send({ message: "Logout Successfully" });
});

// ===================== DELETE USER ROUTE =====================
router.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send({ message: "User Deleted Successfully" });
  } catch (error) {
    console.log("Error deleting user", error);
    res.status(500).send({ message: "Error deleting user" });
  }
});

// ===================== GET ALL USERS =====================
router.get("/users", async (req, res) => {
  try {
    const users = await User.find({}, "id email role").sort({ createdAt: -1 });
    res.status(200).send(users);
  } catch (error) {
    console.log("Error fetching user", error);
    res.status(500).send({ message: "Error fetching user" });
  }
});

// ===================== UPDATE THE USER ROLE =====================
router.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.body;
    const user = await User.findByIdAndUpdate(id, { role }, { new: true });

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send({ message: "User role updated successfully", user });
  } catch (error) {
    console.log("Error updating user role", error);
    res.status(500).send({ message: "Error updating user role" });
  }
});

// ===================== EDIT (OR) UPDATE THE USER PROFILE =====================
router.patch("/edit-profile", async (req, res) => {
  try {
    const { userId, username, profileImage, bio, profession } = req.body;
    if (!userId) {
      return res.status(400).send({ message: "User ID is required" });
    }
    const user = await User.findById(userId);
    //console.log(user);

    if (!user) {
      return res.status(400).send({ message: "User not found" });
    }

    //update the user profile information
    if (username !== undefined) user.username = username;
    if (profileImage !== undefined) user.profileImage = profileImage;
    if (bio !== undefined) user.bio = bio;
    if (profession !== undefined) user.profession = profession;

    await user.save();
    res.status(200).send({
      message: "Profile updated successfully",
      user: {
        _id: user._id,
        email: user.email,
        username: user.username,
        role: user.role,
        profileImage: user.profileImage,
        bio: user.bio,
        profession: user.profession,
      },
    });
  } catch (error) {
    console.log("Error updating user profile", error);
    res.status(500).send({ message: "Error updating user profile" });
  }
});
module.exports = router;
