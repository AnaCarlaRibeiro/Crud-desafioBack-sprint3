import * as express from "express"

declare global {
    namespace Express {
        interface Request {
            user: {
                subject: any
                id: string
               
            }
        }
    }
}