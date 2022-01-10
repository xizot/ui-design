export const genres = [
  {
    title: 'Khoa học viễn tưởng',
    id: 1,
  },
  {
    title: 'Hành động',
    id: 2,
  },
  {
    title: 'Tâm lý',
    id: 3,
  },
  {
    title: 'Hài hước',
    id: 4,
  },
  {
    title: 'Trinh thám',
    id: 5,
  },
  {
    title: 'Kinh dị',
    id: 6,
  },
  {
    title: 'Siêu nhiên',
    id: 7,
  },
];

export const getListCategory = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(genres);
    }, 1000);
  });
};
