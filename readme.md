## 🚗 DriveSmart: UK Theory Quiz - Pseudocode

1. **Initialize Data**
   - Store questions for each level in an object.
   - Track:
     - `level` (current level)
     - `score` (total correct answers)
     - `levelUP` (correct answers in current level)
     - `currentQuestionIndex` (position in current level's questions)

2. **Load Question**
   - Display current question text and answer options.
   - Create a button for each option with a click event:
     - Calls `selectAnswer`.

3. **Select Answer**
   - Disable all option buttons.
   - If answer is correct:
     - Mark button green.
     - Increase `score` and `levelUP`.
     - Show "✅ Correct!" message.
   - Else:
     - Mark button red.
     - Show correct answer.
   - Show **Next** button.

4. **Next Button Logic**
   - If more questions remain in level → load next question.
   - Else (level finished):
     - If `levelUP >= 4` → advance to next level (reset `levelUP`).
     - If no more levels → show "🏆 You Win".
     - If `levelUP < 4` → reset current level and scores, show "😢 Try again".

5. **Styling**
   - `.correct` → green background.
   - `.wrong` → red background.
   - Buttons and quiz container styled for a clean UI.

