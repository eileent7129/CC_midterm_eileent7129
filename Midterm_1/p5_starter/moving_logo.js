// JavaScript source code

// moving logo class 

class MovingLogo {

	constructor() {
		this.position = createVector(100, 100); //  x icreasing quickly, y increasing slowly
		this.velocity = createVector(2, 2.5); // always stays the same, i do want there to be a constant
		// velocity

	}

	move() {
		this.position.add(this.velocity);

		if (bottom_right) {
			this.velocity.x *= -1; // might have to do *-1 instead
			print("bottom right\n");
		}

		else if (upper_right) {
			this.velocity.y *= -1;
			print("upper right\n");
		}

		else if (bottom_left) {
			this.velocity.x *= -1;
			print("bottom left\n");
		}

		else if (upper_left) {
			this.velocity.y *= -1;
			print("upper left\n");
		}

		if ((this.position.x > width) || this.position.x < 0) {
			this.velocity.x = this.velocity.x * -1;
			//	this.position.y -= 10; // not really 
			//	this.velocity.y = 10; // makes it goes faster and kinda does what I want it to do
		}
		if ((this.position.y > height) || this.position.y < 0) {
			this.velocity.y = this.velocity.y * -1;
			//	this.velocity.x = 10; // just makes it faster, doesn't change movement
		}

		//print("positon.x: "); print(this.position.x); print("\n");
		//print("position.y: "); print(this.position.y); print("\n");
	}// move

	check_corner() {
		if (this.position.x > width - 20) { // right
			if (this.position.y > height - 20) { // bottom right corner
				/*	this.position.x -= 5;*/
				bottom_right = true;
				print("corner\n");
			}

			else if (this.position.y < 20) { // top right corner
				/*this.position.y += 5;*/
				upper_right = true;
				print("corner\n");
			}

		}

		else if (this.position.x < 20) { // left 
			if (this.position.y > height - 20) { // bottom left corner
				/*this.position.x += 5;*/
				bottom_left = true;
				print("corner\n");
			}
			else if (this.position.y < 20) { // top left corner
				/*this.position.y += 5;*/
				upper_left = true;
				print("corner\n");
			}
		}

	}

	display() {
		stroke(0);
		fill(175);
		ellipse(this.position.x, this.position.y, 50, 50);

	} // display

}