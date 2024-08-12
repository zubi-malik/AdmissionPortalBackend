const registerSchema = require("./schema");

const register = async (req, res) => {
  const {
    fullName,
    fatherName,
    email,
    cnic,
    fatherCNIC,
    address,
    city,
    phone,
    dob,
    qualification,
    gender,
    laptop,
    selectCourse,
  } = req.body;
  if (
    fullName &&
    fatherName &&
    email &&
    cnic &&
    address &&
    city &&
    phone &&
    dob &&
    qualification &&
    gender &&
    laptop &&
    selectCourse
  ) {
    try {
      const user = await registerSchema.exists({ email });
      if (user) {
        return res.status(400).json({ message: "user already exist" });
      }
      const newUser = await registerSchema.create({
        fullName,
        fatherName,
        email,
        cnic,
        fatherCNIC,
        address,
        city,
        phone,
        dob,
        qualification,
        gender,
        laptop,
        selectCourse,
      });
      return res
        .status(201)
        .json({ message: "User created Successfully", newUser });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  } else {
    return res.status(400).json({ message: "required field missing" });
  }
};

const allUsersLength = async (req, res) => {
  try {
    const users = await registerSchema.find();
    const allUsers = users.length;
    return res.status(200).json({ message: "All Users", allUsers });
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const allUsers = async (req, res) => {
  try {
    const users = await registerSchema.find();
    return res.status(200).json({ message: "All Users", users });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { register, allUsersLength, allUsers };
