import prisma from "../config/prisma.js";
export const predictCollege = async (req, res) => {
    try {
        const { exam, rank } = req.body;
        if (!exam || rank === undefined) {
            res.status(400).json({
                message: "Exam and Rank are required",
            });
            return;
        }
        let colleges;
        if (rank <= 5000) {
            colleges = await prisma.college.findMany({
                where: {
                    rating: {
                        gte: 4.8,
                    },
                },
            });
        }
        else if (rank <= 20000) {
            colleges = await prisma.college.findMany({
                where: {
                    rating: {
                        gte: 4.5,
                    },
                },
            });
        }
        else {
            colleges = await prisma.college.findMany();
        }
        res.status(200).json({
            exam,
            rank,
            recommendedColleges: colleges,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
};
