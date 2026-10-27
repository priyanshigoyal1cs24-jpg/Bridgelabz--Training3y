ASSIGNMENT 3 — JavaScript Solutions

Files:
Q1_Dynamic_Data_Parser.js
Q2_Employee_Bonus_Calculator.js
Q3_Transaction_Validator.js
Q4_Debugging_Mystery.js
Q5_Hoisting_Lab.js
Q6_Pyramid_Pattern_Generator.js
Q7_Smart_Calculator.js
Q8_Strict_Mode_Showdown.js
Q9_JSON_Audit.js
Q10_Nested_Hoisting_and_Closures.js

How to run:
- Most files: open a terminal in this folder and run `node filename.js`.
- Q6 uses prompt(), so run it in a browser console (or adapt input for Node.js).
- Debugging tasks: open a file in VS Code, click beside a line number to add a breakpoint,
  then press F5 / Run and Debug. Add variables such as `count`, `error`, `valid`, `invalid`,
  `index`, and `greeting` to the Watch panel.

Notes:
- Q1 treats blank strings and non-finite conversions as invalid numeric data. Number(null) is 0
  and Number(undefined) is NaN, so null is included as valid numeric zero by JavaScript conversion.
- Q8's original snippet fails to parse in strict mode because duplicate parameter names are not allowed.
