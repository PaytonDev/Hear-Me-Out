import { IUser } from "../types/types"
import { model, Schema } from "mongoose"
import bcrypt from 'bcrypt'

let SALT_WORK_FACTOR: number = 10;

const userSchema = new Schema<IUser>(
    {
         first_name: {
             type: String,
             required: true,
         },

         last_name: {
             type: String,
             required: true,
         },

         username: {
             type: String,
             required: true,
         },

         password: {
             type: String,
             required: true,
         },

         recent_album: {
             type: Array,
             required: false,
         },

         recent_song: {
             type: Array,
             required: false,
         },

         recent_artist: {
             type: Array,
             required: false,
         },
    }
)

userSchema.pre<IUser>("save", function(next) {
const user = this;
if (!user.isModified('password')) return next();

bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt): void {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next (err);

        user.password = hash
    });
});

});


userSchema.methods.comparePassword = function(
    userPassword: string,
    cb: (err: Error | null, same: boolean | null) => void
    ) {
    
    bcrypt.compare(userPassword, this.password, function(err, isMatch) {
        if (err) return cb(err, null);
        cb(null, isMatch)
    })
}

export default model<IUser>("User", userSchema)