export const labels = {
  0.5: '1/10',
  1: '2/10',
  1.5: '3/10',
  2: '4/10',
  2.5: '5/10',
  3: '6/10',
  3.5: '7/10',
  4: '8/10',
  4.5: '9/10',
  5: '10/10',
};
export const fakeLoading = (Fn) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Fn());
    }, 500);
  });
};
