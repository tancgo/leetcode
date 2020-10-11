var convert = function (s, numRows) {
  if (numRows === 1) return s;

  const length = Math.min(s.length, numRows);
  const rows = Array.from({ length }, () => "");

  let loc = 0;
  let down = false;

  for (const n of s) {
    rows[loc] += n;
    if (loc === 0 || loc === numRows - 1) {
      down = !down;
    }

    loc += down ? 1 : -1;
  }

  return rows.join("");
};
