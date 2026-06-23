import prisma from "../config/prisma.js";
async function main() {
    await prisma.college.createMany({
        data: [
            {
                name: "IIT Delhi",
                location: "Delhi",
                fees: 250000,
                rating: 4.8,
                overview: "Top engineering institute in India.",
                averagePackage: 2000000,
                highestPackage: 10000000,
            },
            {
                name: "IIT Bombay",
                location: "Mumbai",
                fees: 230000,
                rating: 4.9,
                overview: "Known for excellent placements.",
                averagePackage: 2200000,
                highestPackage: 12000000,
            },
            {
                name: "NIT Trichy",
                location: "Tamil Nadu",
                fees: 180000,
                rating: 4.6,
                overview: "One of the best NITs.",
                averagePackage: 1500000,
                highestPackage: 5000000,
            },
            {
                name: "IIIT Hyderabad",
                location: "Hyderabad",
                fees: 300000,
                rating: 4.7,
                overview: "Excellent for Computer Science.",
                averagePackage: 2500000,
                highestPackage: 8000000,
            }
        ]
    });
    console.log("Colleges seeded successfully!");
}
main()
    .catch(console.error)
    .finally(async () => {
    await prisma.$disconnect();
});
