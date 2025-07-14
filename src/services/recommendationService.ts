type RecommendationInput = {
    age: number;
    income: number;
    dependents: number;
    riskTolerance: string;
};

type RecommendationResult = {
    recommendation: string;
    explanation: string;
};

export function getLifeInsuranceRecommendation({ age, income, dependents, riskTolerance }: RecommendationInput): RecommendationResult {
    // Simple rules-based logic
    if (age < 40 && riskTolerance === "high") {
        return {
            recommendation: `Term Life – $500,000 for 20 years`,
            explanation: `You are young and have a high risk tolerance. A term life policy with higher coverage for a longer period is suitable.`
        };
    }
    if (age < 40 && riskTolerance !== "high") {
        return {
            recommendation: `Term Life – $250,000 for 20 years`,
            explanation: `You are young with a lower risk tolerance. A moderate term life policy is recommended.`
        };
    }
    if (age >= 40 && age < 60) {
        return {
            recommendation: `Term Life – $250,000 for 10 years`,
            explanation: `At your age, a shorter term policy with moderate coverage is suitable.`
        };
    }
    if (age >= 60) {
        return {
            recommendation: `Whole Life – $100,000`,
            explanation: `For seniors, a whole life policy with lower coverage is recommended for estate planning.`
        };
    }
    // Default fallback
    return {
        recommendation: `Term Life – $100,000 for 10 years`,
        explanation: `A basic term life policy is recommended as a starting point.`
    };
} 