const ColumnList = (props) => {
  const { list, numCols } = props;

  let templateColumnsStyle = '';
  const colItems = [];

  for (let i = 0; i < numCols; i++) {
    // Build template columns style
    templateColumnsStyle += '1fr';
    if (i !== numCols - 1) {
      templateColumnsStyle += ' ';
    }

    // Build colItems for that column
    const currentColItems = [];
    let j = i;
    while (j < list.length) {
      const key = list[j] instanceof object ? JSON.stringify(list[j]) : list[j];
      currentColItems.push(<li key={key}>{list[j]}</li>);
      j += numCols;
    }
    colItems.push(currentColItems);
  }

  const cols = Array.from(Array(numCols).keys()).map((_, index) => {
    return <ul key={index}>{colItems[index]}</ul>;
  });

  return (
    <div
      style={{
        display: 'grid',
        gap: '2rem',
        gridTemplateColumns: `${templateColumnsStyle}`,
      }}
    >
      {cols}
    </div>
  );
};

export default ColumnList;
