// ==========================================
// STUDENT BUDGET TRACKER
// ==========================================

// PART 1: SETUP (VARIABLES)

// Declaring the student's name
const studentName = "Oseni Favour Ayomide";

// Declaring weekly allowance and expenses
let weeklyAllowance = 5000;
let transportCost = 1200;
let foodCost = 2000;
let airtimeCost = 500;


// ==========================================
// PART 2: ARITHMETIC OPERATORS
// ==========================================

// 1. Calculate total expenses
let totalExpenses = transportCost + foodCost + airtimeCost;

// 2. Calculate remaining balance
let remainingBalance = weeklyAllowance - totalExpenses;

// 3. Calculate daily food cost
let dailyFoodCost = foodCost / 7;

// 4. Calculate monthly allowance
let monthlyAllowance = weeklyAllowance * 4;

// 5. Find remainder when allowance is divided by 7
let allowanceRemainder = weeklyAllowance % 7;

// 6. Calculate the square of transport cost
let transportSquare = transportCost ** 2;


// ==========================================
// PART 3: ASSIGNMENT OPERATORS
// ==========================================

// 1. Add ₦1000 gift from a relative
remainingBalance += 1000;

// 2. Subtract ₦300 spent on a snack
remainingBalance -= 300;

// 3. Double the balance
remainingBalance *= 2;

// 4. Split the balance in half
remainingBalance /= 2;

// 5. Find the remainder when balance is divided by 7
remainingBalance %= 7;

// 6. Square the remaining balance
remainingBalance **= 2;


// ==========================================
// PART 4: CONSOLE OUTPUT
// ==========================================

// Display the student's budget summary
console.log("Student: " + studentName);
console.log("Total Expenses: ₦" + totalExpenses);
console.log("Balance: ₦" + remainingBalance);

// Display warning message
console.warn("Warning: Your balance is running low!");

// Display error message
console.error("Error: You have overspent!");


// ==========================================
// PART 5: BONUS CHALLENGE
// ==========================================

// Change food cost to ₦6000
foodCost = 6000;

// Recalculate total expenses
let bonusTotalExpenses = transportCost + foodCost + airtimeCost;

// Recalculate remaining balance
let bonusRemainingBalance = weeklyAllowance - bonusTotalExpenses;

// Display bonus results
console.log("BONUS CHALLENGE");
console.log("New Food Cost: ₦" + foodCost);
console.log("New Total Expenses: ₦" + bonusTotalExpenses);
console.log("New Remaining Balance: ₦" + bonusRemainingBalance);

// Observation:
// Increasing food cost to ₦6000 makes total expenses
// greater than the weekly allowance, resulting in a
// negative balance of -₦2700.