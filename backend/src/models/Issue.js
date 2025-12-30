import mongoose from "mongoose";

const issueSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        desc: { type: String, required: true },
        priority: { type: String, enum: ['Low', 'Medium', 'High'], required: true },
        status: { type: String, enum: ['Open', 'In Progress', 'Closed'], required: true },
    },

    { timestamps: true }
);

const Issue = mongoose.model("Issue", issueSchema);

export default Issue;