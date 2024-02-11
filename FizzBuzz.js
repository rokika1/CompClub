// Unclear variable name
// Non-descriptive variable names reduce clarity
for (let APPLE = 1; APPLE <= 100; APPLE++) {

    if (APPLE % 3 === 0) {
        // Unnecessary nested if statements
        // Nested if statements make code hard to follow
        if (APPLE % 5 === 0) {
            console.log("CompClub");
        } else {
            console.log("Comp");
        }
    }

    // Inefficient logic separation
    // Separating related logic into multiple blocks can reduce code efficiency and readability
    if (APPLE % 5 === 0) {
        // Redundant condition checks
        // Checking conditions that could be simplified or grouped increases complexity
        if (APPLE % 3 !== 0) {
            console.log("Club");
        }
    }

    // Inefficient logic separation
    if (APPLE % 3 !== 0) {
        // Redundant condition checks
        if (APPLE % 5 !== 0) {
            console.log(APPLE);
        }
    }
}