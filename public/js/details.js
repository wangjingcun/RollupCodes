const sections = document?.querySelectorAll('div[data-element-type="section"]')
let sidebarItems = []
sections.forEach((section) => {
    sidebarItems.push(section.querySelectorAll('div[data-element-type="section-button"]')[0].getAttribute("data-element-value"))
})

const sidebar = document.getElementById('sidebar')
sidebarItems?.map((item) => {
    let link = document.createElement('a');
    link.className = 'sidebarItem'
    link.href = `#${item.toLowerCase().replace(' ', '-')}`
    link.innerText = item
    link.scroll = false
    sidebar.appendChild(link)
})

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function(e){
        e.preventDefault()
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        })
    })
})

const tables = document?.querySelectorAll('table')
tables?.forEach((table) => {
    table.setAttribute('cellspacing','0')
    table.setAttribute('borderCollapse','separate')

    const rows = table.querySelectorAll('tr')
    rows.forEach((row) => {
        const cells = row.querySelectorAll('td')

        // Makes row bottom border in the same color as icon's color
        if (cells.length > 0) {
            let className = ''
            cells.forEach((cell) => {
                cells.forEach((cell) => {
                    if (cell.getElementsByTagName('div')[0]) {
                        className = `${cell.getElementsByTagName('div')[0].getElementsByTagName('svg')[0].getAttribute('data-type')}`
                    }
                })
                if(className) {
                    cell.className = className
                }
            })
        }

        function hoverOnRow (src) {
            const cells = row.querySelectorAll('td')
            if (cells.length > 0 && cells[0].getElementsByTagName('img').length > 0) {
                const img = cells[0].getElementsByTagName('img')[0]
                img.src = src
            }
        }

        row.addEventListener('mouseover', function() {
            hoverOnRow('../images/link-icon-active.png')
        })

        row.addEventListener('mouseout', function() {
            hoverOnRow('../images/link-icon.png')
        })
       
    })
})