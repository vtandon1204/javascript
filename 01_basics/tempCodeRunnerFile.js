const hundreds = 100000000;
console.log(hundreds.toExponential()); // 1e+8
console.log(hundreds.toLocaleString("en-IN")); // 10,00,00,000
console.log(hundreds.toLocaleString("en-US")); // 100,000,000
console.log(hundreds.toLocaleString("en-IN", { style: 'currency', currency: 'INR' })); // ₹1,00,00,000.00
console.log(hundreds.toLocaleString("en-US", { style: 'currency', currency: 'USD' })); // $100,000,000.00
console.log(hundreds.toLocaleString("en-IN", { style: 'currency', currency: 'INR', minimumFractionDigits: 2 })); // ₹1,00,00,000.00