import { Request, Response, NextFunction } from "express";
import "dotenv/config";
import jwt from "jsonwebtoken";


const verifyUserMeddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
 
  
  const uuid = req.params.uuid;
// console.log(req.params.id, "aqui middleware------");
let token = req.headers.authorization;
if (!token) {
  return res.status(401).send("Access denied. No token provided.");
}
const decoded = jwt.verify(token, process.env.SECRET_KEY as string);
console.log(decoded, "==============");


  // if (req.params && req.user.id == uuid) {
  //   next();
  // } else {
  //   return res.status(403).json({
  //     message: "Unauthorizad",
  //   });
  // }
};

export default verifyUserMeddleware;

// const verifyUserMiddleware = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
//   ) => {
  
//     console.log(req.headers, "aqui--------");
//   let token = req.headers.authorization;
//   if (!token) {
//   return res.status(401).send("Access denied. No token provided.");
//   }
  
//   try {
//   const decoded = jwt.verify(token, process.env.SECRET_KEY as string);
//   const userId = decoded.subject;
//   if (userId !== req.params.id) {
//     return res.status(401).send("Unauthorized");
//   }
//   } catch (error) {
//   return res.status(400).send("Unauthorized");
//   }
  

//   const userIdFromToken = req.user.subject;
  
//   if (userIdFromRoute !== userIdFromToken) {
//   return res.status(401).send("Access denied. User mismatch.");
//   }
  
//   next();
//   };
  
//   export default verifyUserMiddleware;
