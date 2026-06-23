import prisma from "../config/prisma.js";
import type { Request, Response } from "express";

// Create Question
export const createQuestion = async (
  req: Request,
  res: Response
) => {
  try {
    const { title, description, userId } = req.body;

    const question = await prisma.question.create({
      data: {
        title,
        description,
        userId,
      },
    });

    res.status(201).json(question);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// Get All Questions
export const getQuestions = async (
  req: Request,
  res: Response
) => {
  try {
    const questions = await prisma.question.findMany({
      include: {
        answers: true,
      },
    });

    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// Add Answer
export const addAnswer = async (
  req: Request,
  res: Response
) => {
  try {
    const { answer, questionId, userId } = req.body;

    const newAnswer = await prisma.answer.create({
      data: {
        answer,
        questionId,
        userId,
      },
    });

    res.status(201).json(newAnswer);
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};