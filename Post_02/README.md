# Arrow Motion Simulation (Runge-Kutta 4)

This repository contains the source code used to simulate the flight dynamics of an arrow. It solves a system of differential equations to compare ideal motion against realistic motion with air resistance.

This project serves as the computational core for the analysis presented in my blog post:  
**["100 Million Arrows"](https://thephantomvector.blogspot.com/2025/12/a-hundred-million-arrows.html)**

## Overview

The simulation models the trajectory of a projectile (an arrow) by solving Newton's equations of motion. It focuses on the difference between:
1.  **Ideal Motion:** No atmosphere (vacuum).
2.  **Realistic Motion:** Including air friction (drag force).

To ensure high numerical stability and accuracy, the system of 2nd-order Ordinary Differential Equations (ODEs) is solved using the **Runge-Kutta 4th Order (RK4)** method.

## Mathematical Model

The script breaks down the 2nd-order differential equations into a system of 1st-order equations:

- **Vacuum:** Gravity is the only force acting on the arrow.
- **Air Friction:** A drag force is applied opposing the velocity vector, typically proportional to $v^2$ (quadratic drag).

## Features

* **RK4 Implementation:** Custom implementation of the Runge-Kutta 4 algorithm.
* **Physics Comparison:** Visual or data output comparing the two scenarios.
* **Configurable Parameters:** Initial velocity, angle of release, and drag coefficient.

## Related Blog Post

For a deeper dive into the results, the history behind the numbers, and the "100 Million Arrows" concept, please read the full article on my blog:

[**Read "100 Million Arrows"**](https://thephantomvector.blogspot.com/2025/12/a-hundred-million-arrows.html)
