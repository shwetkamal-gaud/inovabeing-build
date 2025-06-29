import mongoose, { Schema, models } from "mongoose";

const TodoSchema = new Schema({
    title: { type: String, required: true },
    status: { type: String, default: 'panding' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

export const Todo = models.Todo || mongoose.model("Todo", TodoSchema);
