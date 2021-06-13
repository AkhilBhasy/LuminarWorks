var a = 180, b = 50, c = 70;
if ((a > b) && (a > c) && (b > c)) {
    console.log(b + " is 2nd Largest");
}
else if ((b > a) && (b > c) && (a > c))
    console.log(a + " is 2nd Largest");
else
    console.log(c + " is 2nd Largest");