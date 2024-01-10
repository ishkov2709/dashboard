const spritePath = './sprite.svg'

const navItem = (name) => ` <li class="list__item">
                                <button class="list__button">
                                    <svg class="list__icon
                                        ${
                                          ['dashboard', 'customers', 'income'].includes(name) &&
                                          'inside-transparent'
                                        } 
                                        ${
                                          ['product', 'promoute', 'help', 'promote'].includes(
                                            name
                                          ) && 'outside-transparent'
                                        }" width="24" height="24">
                                        <use href="${spritePath}#${name}"></use>
                                    </svg>
                                    <span class="list__text">${name}</span>
                                    <svg class="list__arrow"  width="16" height="16">
                                        <use href="${spritePath}#cheveron-right"></use>
                                    </svg>
                                </button>
                            </li>`

export default navItem
