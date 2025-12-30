import Issue from "../models/Issue.js";

export async function getAllIssues(_, res) {
    try {
        const issues = await Issue.find({});
        res.status(200).json(issues);
    } catch (error) {
        console.error("Error fetching issues:", error);
        res.status(500).json({ message: "Server Error" });
    }
}
export async function getIssuesById(req, res) {
    try {
        const issue = await Issue.findById(req.params.id);
        if (!issue) return res.status(404).json({ message: "Issue not found" });
        res.status(200).json(issue);
    } catch (error) {
        console.error("Error fetching issue by ID:", error);
        res.status(500).json({ message: "Server Error" });
    }
}
export async function createIssues(req, res) {
    try {
        const { title, desc, priority, status } = req.body;
        const newIssue = new Issue({ title, desc, priority, status });

        const savedIssue = await newIssue.save();
        res.status(201).json(savedIssue);
    } catch (error) {
        console.error("Error creating issue:", error);
        res.status(500).json({ message: "Server Error" });
    }
}
export async function updateIssues(req, res) {
    try {
        const { title, desc, priority, status } = req.body;
        const updatedIssue = await Issue.findByIdAndUpdate(
            req.params.id,
            { title, desc, priority, status },
            { new: true }
        );

        if (!updatedIssue) return res.status(404).json({ message: "Issue not found" });
        res.status(200).json(updatedIssue);
    } catch (error) {
        console.error("Error updating issue:", error);
        res.status(500).json({ message: "Server Error" });
    }
}
export async function deleteIssues(req, res) {
    try {
        const deletedIssue = await Issue.findByIdAndDelete(
            req.params.id,
        );

        if (!deletedIssue) return res.status(404).json({ message: "Issue not found" });
        res.status(200).json({ message: "Issue has been deleted!" });
    } catch (error) {
        console.error("Error deleting issue");
        res.status(500).json({ message: "Server Error" });
    }
}