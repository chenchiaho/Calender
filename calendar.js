function doFirst() {
    let YYYY = new Date().getFullYear() //2022
    let MM = new Date().getMonth() + 1    // 11


    // 年的選單
    let year = document.getElementById('year')

    for (let i = YYYY - 20; i < YYYY + 20; i++) {
        let option = document.createElement('option')   // 1. 先建標籤

        if (i == YYYY) {                            // 2. 將該標籤的屬性和方法先寫好
            option.selected = true // option.setAttribute('selected','selected')
        }
        option.value = i    // option.setAttribute('value', i)
        option.innerText = i

        year.appendChild(option)                        // 3. 找到爸爸，加進去
    }

    // 月的選單
    let month = document.getElementById('month')
    for (let i = 1; i <= 12; i++) {
        let option = document.createElement('option')
        if (i == 0) {
            option.selected = true
        }

        option.value = i    // option.setAttribute('value', i)  
        option.innerText = i

        month.appendChild(option)                        // 3. 找到爸爸，加進去

    }
    let firstDay = new Date(`
        ${YYYY},${MM},1
    `).getDay()

    let monthDays = new Date(YYYY, MM, 0).getDate()

    showCalendar(firstDay, monthDays)

    year.addEventListener('change', changeCalendar)
    month.addEventListener('change', changeCalendar)

    function showCalendar(firstDay, monthDays) {
        let amount = firstDay + monthDays
        let calendar = document.getElementById('calendar')

        // 按照天數
        for (let i = 0; i < amount; i++) {
            if (i % 7 == 0) {
                // let trWeek = document.createElement('tr')
                // calendar.appendChild(tr)
                tr = calendar.appendChild(document.createElement('tr'))
            }

            if (i < firstDay) {
                // let td = document.createElement('td')
                td = tr.appendChild(document.createElement('td'))
                td.innerText = ''
            } else {
                td = tr.appendChild(document.createElement('td'))
                td.innerText = i - firstDay + 1
            }


            // 補滿最後一列的 td
            // 想想看!!
        }
    }

    function changeCalendar() {
        // 清除原來的月曆
        let calendar = document.getElementById('calendar')
        let length = calendar.childNodes.length - 1

        for (let i = 2; i <= length; i++) {
            calendar.childNodes[i].innerHTML = ''
        }

        // 產生新的月曆
        let chosenYear = document.getElementById('year').value
        let chosenMonth = document.getElementById('month').value

        // 重選之後之~~當月的第一天是星期幾
        let firstDay = new Date(`${chosenYear},${chosenMonth},1`).getDay()

        // 重選之後之~~當月一共有幾天
        let monthDate = new Date(chosenYear, chosenMonth, 0).getDate()

        showCalendar(firstDay, monthDate)
    }

    // year.addEventListener('change', changeCalendar)
    // month.addEventListener('change', changeCalendar)



}

window.addEventListener('load', doFirst)