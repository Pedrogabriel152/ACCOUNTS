import { Request, Response } from "express"

const getToken = (req: Request) => {

    const authHeader = req.headers.authorization
    
    if(!authHeader) {
        return null
    }

    const token = authHeader.split(" ")[1]

    return token

}

export default getToken;