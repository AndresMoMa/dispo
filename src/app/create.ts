
export default (arr: any[]) => {
    return arr.reduce(
      (a, v) => ({
        ...a,
        [v[0]]: arr.filter((i) => i[0] == v[0]),
      }),
      {}
    );
  };
  