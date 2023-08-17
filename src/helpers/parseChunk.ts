export const parseChunk = <T>(chunk: string, regExp: RegExp): T[] => {
  const result = chunk.match(regExp);

  if (result) {
    return result.map<T>((test) => JSON.parse(test));
  } else {
    return [];
  }
};
