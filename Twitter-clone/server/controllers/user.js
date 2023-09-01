import User from "../models/User.js";

export const getUsers = async (req, res, next) => {
  console.log(req.params);
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
export const updateUser = async (req, res, next) => {
  console.log(req.params);
  if (req.params.id === req.body.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
  }
};
