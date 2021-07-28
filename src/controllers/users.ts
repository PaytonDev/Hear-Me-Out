import { Response, Request } from "express";
import { IUser } from "../types/types";
import  User  from "../models/user"

const getUser = async (req: Request, res:Response): Promise<void> => {
    try {
        const user:IUser | null = await User.findById(req.params.id)
        res.status(200).json({ user })
    } catch (err) {
        throw err
    }
}

const addUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<IUser, "first_name" | "last_name" | "username" | "password" | "recent_album" |"recent_artist" | "recent_song" >

        const user: IUser = new User({
            first_name: body.first_name,
            last_name: body.last_name,
            username: body.username,
            password: body.password,
            recent_song: body.recent_song,
            recent_artist: body.recent_artist,
            recent_album: body.recent_album,
        })

        const newUser: IUser = await user.save()

        res
            .status(201)
            .json({message: "User Added", user: newUser})
    } catch (err) {
        throw err
    }
}

export { getUser, addUser }