import { body } from "express-validator";

export const recommendationValidators = [
    body("age")
        .isInt({ min: 18, max: 100 })
        .withMessage("Age must be an integer between 18 and 100"),
    body("income")
        .isFloat({ min: 1 })
        .withMessage("Income must be a positive number"),
    body("dependents")
        .isInt({ min: 0 })
        .withMessage("Number of dependents must be a non-negative integer"),
    body("riskTolerance")
        .isIn(["low", "medium", "high"])
        .withMessage("Risk tolerance must be one of: low, medium, high"),
]; 