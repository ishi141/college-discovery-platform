import prisma from "../config/prisma.js";
export const compareColleges = async (req, res) => {
    try {
        const { ids } = req.body;
        if (!ids || !Array.isArray(ids)) {
            res.status(400).json({
                message: "Please provide an array of college IDs",
            });
            return;
        }
        const colleges = await prisma.college.findMany({
            where: {
                id: {
                    in: ids,
                },
            },
            select: {
                id: true,
                name: true,
                location: true,
                fees: true,
                rating: true,
                averagePackage: true,
                highestPackage: true,
            },
        });
        res.status(200).json(colleges);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong",
        });
    }
};
