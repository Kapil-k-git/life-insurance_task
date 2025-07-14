# Backend API Usage

## POST /api/recommendation

Accepts user profile data and returns a personalized life insurance recommendation.

### Request Body
```
{
  "age": 35,
  "income": 80000,
  "dependents": 2,
  "riskTolerance": "medium"
}
```

### Response
```
{
  "success": true,
  "recommendation": "Term Life – $250,000 for 20 years",
  "explanation": "You are young with a lower risk tolerance. A moderate term life policy is recommended."
}
```

### Validation Errors
```
{
  "success": false,
  "errors": [
    { "msg": "Age must be an integer between 18 and 100", "param": "age", ... }
  ]
}
``` 