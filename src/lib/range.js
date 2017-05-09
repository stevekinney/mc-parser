const range = (startCoordinates, endCoordinates) => {
  const [startRow, startColumn] = startCoordinates;
  const [endRow, endColumn] = endCoordinates;
  return {
    start: {
      row: startRow,
      column: startColumn,
    },
    end: {
      row: endRow,
      column: endColumn,
    },
  };
};

export default range;
