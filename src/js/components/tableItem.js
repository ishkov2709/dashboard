const tableItem = ({
  name,
  company,
  phone,
  email,
  country,
  status,
}) => ` <tr class="table__row table__row--semiborder ">
                <td class="table__item">${name}</td>
                <td class="table__item">${company}</td>
                <td class="table__item">${phone}</td>
                <td class="table__item">${email}</td>
                <td class="table__item">${country}</td>
                <td class="table__item "><span class="item__value ${
                  status ? 'item__value--active' : 'item__value--inactive'
                }">
                ${status ? 'Active' : 'Inactive'}</span></td>
        </tr>`

export default tableItem
