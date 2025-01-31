// fakeData.ts

function generateFakeStockData(length: number, startValue: number = 100): number[] {
  const data: number[] = [];
  let current = startValue;

  for (let i = 0; i < length; i++) {
    // Leichte negative Drift, plus/minus kleine Schwankung
    const drift = -0.2;
    const randomFluct = Math.floor(Math.random() * 5) - 2; // -2 .. +2

    current += drift + randomFluct;
    if (current < 0) current = 0;
    data.push(Math.round(current));
  }
  return data;
}

// 1) Erzeuge einen großen Datensatz mit 548 Werten (1,5 Jahre)
const bigData = generateFakeStockData(548);

// 2) Leite die kürzeren Arrays als Teil-Slices davon ab
//    Tag:   24 Werte
//    Woche: 84 Werte
//    Monat: 248 Werte
//    Jahr:  365 Werte
//    1,5J:  548 Werte (alles)
export const dayData = bigData.slice(0, 24);
export const weekData = bigData.slice(0, 84);
export const monthData = bigData.slice(0, 248);
export const yearData = bigData.slice(0, 365);
export const yearHalfData = bigData.slice(0, 548);
