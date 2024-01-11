const calcTableData = (data, count, item) =>
  data
    .filter((el, i) => {
      if (i >= count.start && i < count.end) {
        return el
      }
    })
    .map((el) => item(el))
    .join('')

export default calcTableData
