
const FILTER = document.querySelectorAll('.filter-kit')


FILTER.forEach(element => {

    const FILTER_BUTTON = element.querySelector('.filter-category-kit')
    const FILTER_BUTTON_RADIO = element.querySelector('.filter-radio-kit')
    const FILTER_BUTTON_BUDGET= element.querySelector('.filter-budget-kit')

    if(FILTER_BUTTON_RADIO) {

        FILTER_BUTTON_RADIO.onclick = () => {

            const OPTIONS_CATEGORY_KIT = element.querySelector('.options-radio-kit')
            const FILTER_KIT_ICON = element.querySelector('.filter-kit span[uk-icon]')

            if(OPTIONS_CATEGORY_KIT.style.display === 'flex') {

                OPTIONS_CATEGORY_KIT.style.display = 'none'
                FILTER_KIT_ICON.style.transition = 'all .3s'
                FILTER_KIT_ICON.style.transform = 'rotate(0deg)'

            } else {

                const ALL_OTHER_CATEGORY_BLOCK = document.querySelectorAll('.options-category-kit')
                ALL_OTHER_CATEGORY_BLOCK.forEach(element => {
                    element.style.display = 'none'
                })

                const ALL_OTHER_KIT_ICONS = document.querySelectorAll('.filter-kit span[uk-icon]')

                const ALL_OTHER_BUDGET_BLOCK = document.querySelectorAll('.options-budget-kit')

                ALL_OTHER_BUDGET_BLOCK.forEach(element => {
                    element.style.display = 'none'
                })

                ALL_OTHER_KIT_ICONS.forEach(element => {
                    element.style.transition = 'all .3s'
                    element.style.transform = 'rotate(0deg)'
                })

                OPTIONS_CATEGORY_KIT.style.display = 'flex'
                FILTER_KIT_ICON.style.transition = 'all .3s'
                FILTER_KIT_ICON.style.transform = 'rotate(-180deg)'

            }

        }

    }

    if(FILTER_BUTTON_BUDGET) {

        FILTER_BUTTON_BUDGET.onclick = () => {

            const OPTIONS_BUDGET_KIT = element.querySelector('.options-budget-kit')
            const FILTER_KIT_ICON = element.querySelector('.filter-kit span[uk-icon]')

            if(OPTIONS_BUDGET_KIT.style.display === 'flex') {

                OPTIONS_BUDGET_KIT.style.display = 'none'
                FILTER_KIT_ICON.style.transition = 'all .3s'
                FILTER_KIT_ICON.style.transform = 'rotate(0deg)'

            } else {

                const ALL_OTHER_CATEGORY_BLOCK = document.querySelectorAll('.options-category-kit')
                ALL_OTHER_CATEGORY_BLOCK.forEach(element => {
                    element.style.display = 'none'
                })

                const ALL_OTHER_RADIOS_BLOCK = document.querySelectorAll('.options-radio-kit')

                ALL_OTHER_RADIOS_BLOCK.forEach(element => {
                    element.style.display = 'none'
                })

                const ALL_OTHER_KIT_ICONS = document.querySelectorAll('.filter-kit span[uk-icon]')

                ALL_OTHER_KIT_ICONS.forEach(element => {
                    element.style.transition = 'all .3s'
                    element.style.transform = 'rotate(0deg)'
                })

                OPTIONS_BUDGET_KIT.style.display = 'flex'
                FILTER_KIT_ICON.style.transition = 'all .3s'
                FILTER_KIT_ICON.style.transform = 'rotate(-180deg)'

            }

        }

    }

    if(FILTER_BUTTON) {

        FILTER_BUTTON.onclick = () => {

            const OPTIONS_CATEGORY_KIT = element.querySelector('.options-category-kit')
            const FILTER_KIT_ICON = element.querySelector('.filter-kit span[uk-icon]')

            if(OPTIONS_CATEGORY_KIT.style.display === 'flex') {

                OPTIONS_CATEGORY_KIT.style.display = 'none'
                FILTER_KIT_ICON.style.transition = 'all .3s'
                FILTER_KIT_ICON.style.transform = 'rotate(0deg)'

            } else {

                const ALL_OTHER_CATEGORY_BLOCK = document.querySelectorAll('.options-category-kit')

                ALL_OTHER_CATEGORY_BLOCK.forEach(element => {
                    element.style.display = 'none'
                })

                const ALL_OTHER_RADIOS_BLOCK = document.querySelectorAll('.options-radio-kit')

                ALL_OTHER_RADIOS_BLOCK.forEach(element => {
                    element.style.display = 'none'
                })

                const ALL_OTHER_BUDGET_BLOCK = document.querySelectorAll('.options-budget-kit')

                ALL_OTHER_BUDGET_BLOCK.forEach(element => {
                    element.style.display = 'none'
                })

                const ALL_OTHER_KIT_ICONS = document.querySelectorAll('.filter-kit span[uk-icon]')

                ALL_OTHER_KIT_ICONS.forEach(element => {
                    element.style.transition = 'all .3s'
                    element.style.transform = 'rotate(0deg)'
                })

                OPTIONS_CATEGORY_KIT.style.display = 'flex'
                FILTER_KIT_ICON.style.transition = 'all .3s'
                FILTER_KIT_ICON.style.transform = 'rotate(-180deg)'

            }

        }

    }

})

