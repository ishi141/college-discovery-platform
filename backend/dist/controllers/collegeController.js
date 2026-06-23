import prisma from "../config/prisma.js";
// Get all colleges
export const getAllColleges = async (req, res) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const search = req.query.search?.toString() || "";
        const location = req.query.location?.toString() || "";
        const minRating = Number(req.query.minRating) || 0;
        const skip = (page - 1) * limit;
        const colleges = await prisma.college.findMany({
            where: {
                name: {
                    contains: search,
                    mode: "insensitive",
                },
                location: {
                    contains: location,
                    mode: "insensitive",
                },
                rating: {
                    gte: minRating,
                },
            },
            skip,
            take: limit,
        });
        const total = await prisma.college.count({
            where: {
                name: {
                    contains: search,
                    mode: "insensitive",
                },
                location: {
                    contains: location,
                    mode: "insensitive",
                },
                rating: {
                    gte: minRating,
                },
            },
        });
        res.status(200).json({
            currentPage: page,
            totalPages: Math.ceil(total / limit),
            totalColleges: total,
            data: colleges,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong",
        });
    }
};
// Get college by ID
export const getCollegeById = async (req, res) => {
    try {
        const id = req.params.id?.toString();
        if (!id) {
            res.status(400).json({
                message: "College ID is required",
            });
            return;
        }
        const college = await prisma.college.findUnique({
            where: {
                id: id,
            },
            include: {
                courses: true,
                reviews: true,
            },
        });
        if (!college) {
            res.status(404).json({
                message: "College not found",
            });
            return;
        }
        res.status(200).json(college);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong",
        });
    }
};
