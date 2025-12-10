function System(Y, g, beta) {
    const vx = Y[2];
    const vy = Y[3];
    const v = Math.sqrt(vx * vx + vy * vy);

    let dYdt = [];
    
    dYdt[0] = vx; // dx/dt
    dYdt[1] = vy; // dy/dt
    dYdt[2] = -beta  * v * vx; 
    dYdt[3] = -g + -beta * v * vy; 
    
    return dYdt;
}

function RungeKutta4(Y_attuale, h, g, beta) {
    const k1_raw = System(Y_attuale, g, beta);
    const k1 = k1_raw.map(val => h * val);

    const Y_k2 = Y_attuale.map((y, i) => y + k1[i] * 0.5);
    
    const k2_raw = System(Y_k2, g, beta);
    const k2 = k2_raw.map(val => h * val);

    const Y_k3 = Y_attuale.map((y, i) => y + k2[i] * 0.5);
    
    const k3_raw = System(Y_k3, g, beta);
    const k3 = k3_raw.map(val => h * val);
    
    const Y_k4 = Y_attuale.map((y, i) => y + k3[i]);
    
    const k4_raw = System(Y_k4, g, beta);
    const k4 = k4_raw.map(val => h * val);

    const Y_next = Y_attuale.map((y, i) => {
        return y + (1/6) * (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i]);
    });
    
    return Y_next;
}

document.getElementById('btnStart').addEventListener('click', function(event) {
    
    //get values
    const Altitude = parseFloat(document.getElementById("Altitude").value);
    const Frequency = parseFloat(document.getElementById("Frequency").value);
    const Angle = parseFloat(document.getElementById("Angle").value);
    const Velocity = parseFloat(document.getElementById("Velocity").value);
    const Drag = document.getElementById("Drag").checked;

    const g = 9.81;
    const beta = Drag ? 0.0018 : 0;
    const h = 0.1;
    const v0 = Velocity;
    const y0 = Altitude;

    const AngleRad = Angle * Math.PI / 180;
    const vx0 = v0 * Math.cos(AngleRad);
    const vy0 = v0 * Math.sin(AngleRad);

    let Y = [0, y0, vx0, vy0];
    let tf = 0 //flight time

    const max_steps = 3000;
    let step_count = 0;

    while (Y[1] >= 0 && step_count < max_steps) {
        const Y_successivo = RungeKutta4(Y, h, g, beta);
        Y = Y_successivo;
        tf += h; // increase time
        step_count++;
    }

    //get vertical height and velocity at time of impact
    let y_curr = Y[1]; 
    let vy_curr = Y[3]; 
    
    let dt_excess = y_curr / vy_curr;
    
    // flight time
    let exact_tf = tf - dt_excess;

    n_soldier = Math.pow(10,8)/(exact_tf * Frequency)

    //print
    document.getElementById("text").innerText = n_soldier.toFixed(0) + " soldiers";
});