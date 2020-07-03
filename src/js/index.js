const GDC = (a ,b) => {
    debugger;
    if (b === 0) {
        return a;
    } else {
        return GDC(b, a%b);
    }
}

// GDC(10,5) // Output: 5