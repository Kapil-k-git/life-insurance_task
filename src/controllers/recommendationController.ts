import { Request, Response } from "express";
import { getLifeInsuranceRecommendation } from "../services/recommendationService";
import { AppDataSource } from "../config/ormconfig";
import { UserSubmission } from "../entities/UserSubmission";

export const getRecommendation = async (req: Request, res: Response) => {
    try {
        const { age, income, dependents, riskTolerance } = req.body;
        const { recommendation, explanation } = getLifeInsuranceRecommendation({ age, income, dependents, riskTolerance });

        // Store submission in DB
        const submissionRepo = AppDataSource.getRepository(UserSubmission);
        const submission = submissionRepo.create({
            age,
            income,
            dependents,
            riskTolerance,
            recommendation,
            explanation,
        });
        await submissionRepo.save(submission);

        return res.status(200).json({
            success: true,
            recommendation,
            explanation,
        });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        return res.status(500).json({ success: false, message: "Server error", error: errorMessage });
    }
}; 