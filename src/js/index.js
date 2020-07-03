let balls = 0;

function cannonBalls(h) {
    if (h >= 0) {
        balls = balls + (h);
        cannonBalls(h-1);
    } else {
        alert(`The number of cannon balls is ${balls}`);
        return balls = 0;
    };
};

// cannonBalls(4); Output: 10