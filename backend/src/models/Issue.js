import mongoose from "mongoose";

const issueSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        desc: { type: String, required: true },
        priority: { type: String, enum: ['low', 'medium', 'high'], required: true },
        status: { type: String, enum: ['open', 'in-progress', 'closed'], required: true },
    },

    { timestamps: true }
);

const Issue = mongoose.model("Issue", issueSchema);

export default Issue;