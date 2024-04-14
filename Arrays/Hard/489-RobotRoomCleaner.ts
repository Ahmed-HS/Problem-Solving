/**
 * Hard
 * https://leetcode.com/problems/robot-room-cleaner/
 */
function cleanRoom(robot: Robot) {
	// Directions for the robot to move: left, up, right, and down
	const directions: number[] = [-1, 0, 1, 0, -1];

	// Set to keep track of visited cells to avoid cleaning the same cell multiple times
	const visited = new Set<string>();

	// Recursive depth-first search (DFS) function to clean the room
	function depthFirstSearch(
		x: number,
		y: number,
		currentDirection: number,
		robot: Robot
	) {
		// Mark the current cell as visited by adding it to the visited set
		visited.add(`${x}-${y}`);
		// Clean the current cell
		robot.clean();
		// Explore all four directions: left, up, right, and down
		for (let i = 0; i < 4; ++i) {
			// Calculate new direction after turning right 'i' times from current direction
			const newDirection = (currentDirection + i) % 4;
			// Get the new cell coordinates based on the direction
			const newX = x + directions[newDirection];
			const newY = y + directions[newDirection + 1];

			// If the new cell has not been visited and is not blocked
			if (!visited.has(`${newX}-${newY}`) && robot.move()) {
				// Recur to clean the new cell
				depthFirstSearch(newX, newY, newDirection, robot);

				// Backtrack to the previous cell, facing the same direction as before
				robot.turnRight();
				robot.turnRight();
				robot.move();
				robot.turnRight();
				robot.turnRight();
			}
			// Turn the robot to the right (next direction)
			robot.turnRight();
		}
	}
	// Start DFS from the initial cell (0, 0) facing up (direction index 0)
	depthFirstSearch(0, 0, 0, robot);
}
