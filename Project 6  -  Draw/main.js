// Losowanie liczby w przedziale (nie od 0)

// od 4 do 6 -> np.4.232323346, 5.76869723
// x >= 4 i x < 6
Math.random() * (6 - 4) + 4;

const numberRandom = (min, max) => {
    const number = Math.floor(Math.random() * (max - min + 1) + min);
    return number;
}