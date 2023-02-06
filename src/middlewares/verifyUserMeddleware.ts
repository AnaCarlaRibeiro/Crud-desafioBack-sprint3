import { Request, Response, NextFunction } from "express";
import "dotenv/config";


const verifyUserMeddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
 
  
  const uuid = req.params.uuid;

  if (req.user && req.user.id == uuid) {
    next();
  } else {
    return res.status(403).json({
      message: "Unauthorizad",
    });
  }
};

export default verifyUserMeddleware;
