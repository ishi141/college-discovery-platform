import prisma from "../config/prisma.js";
// Save College
export const saveCollege = async (req, res) => {
    try {
        const { collegeId } = req.body;
        const saved = await prisma.savedCollege.create({
            data: {
                userId: req.userId,
                collegeId,
            },
        });
        res.status(201).json(saved);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
};
// Get Saved Colleges
export const getSavedColleges = async (req, res) => {
    try {
        const colleges = await prisma.savedCollege.findMany({
            where: {
                userId: req.userId,
            },
            include: {
                college: true,
            },
        });
        res.status(200).json(colleges);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
};
