import { create ,login} from "../services/userServices.js";

export async function createUser(req, res, next) {
  const { username, email, password } = req.body;
  try {
    const user = await create(username, email, password);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
}

export async function loginUser(req, res, next) {
    const { username, password } = req.body;
    try {
      const user = await login(username, password);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
