import { addClasses } from '../utilities/classes-names'
import { createButton } from './Button'

export const createTable = () => {
  const tableWrapper = document.createElement('div')
  tableWrapper.className = 'sb-table-wrapper'

  const table = document.createElement('table')
  table.className = 'sb-table'

  const plans = [
    {
      id: 'starter',
      title: 'Starter',
      subtitle: 'Free',
      buttonLabel: 'Select Plan',
      buttonClick: () => {},
      pro: false,
      buttonColor: 'pink'
    },
    {
      id: 'pro',
      title: 'Pro',
      subtitle: '$16.7 / month',
      buttonLabel: 'Select Plan',
      buttonClick: () => {},
      pro: true,
      buttonColor: 'orange'
    },
    {
      id: 'proTeam',
      title: 'Pro Team',
      subtitle: '$16.7 / month',
      buttonLabel: 'Select Plan',
      buttonClick: () => {},
      pro: true,
      buttonColor: 'orangered'
    }
  ]

  const sections = [
    {
      header: {
        title: 'Be inspired.'
      },
      rows: [
        {
          title: 'News, Trends and interviews',
          starter: '<span class="check-pink"></span>',
          pro: '<span class="check-orange"></span>',
          proTeam: '<span class="check-orangered"></span>'
        },
        {
          title: 'Weekly email newsletter',
          starter: '<span class="check-pink"></span>',
          pro: '<span class="check-orange"></span>',
          proTeam: '<span class="check-orangered"></span>'
        },
        {
          title: 'Models rankings',
          starter: '<span class="check-pink"></span>',
          pro: '<span class="check-orange"></span>',
          proTeam: '<span class="check-orangered"></span>'
        },
        {
          title: 'Notifications from your favorites',
          starter: '<span class="check-pink"></span>',
          pro: '<span class="check-orange"></span>',
          proTeam: '<span class="check-orangered"></span>'
        }
      ]
    },
    {
      header: {
        title: 'Discover & Connect.'
      },
      rows: [
        {
          title: 'Explore Models & Creatives',
          starter: 'Up to 50 pages / mo.',
          pro: 'Unlimited',
          proTeam: 'Unlimited'
        },
        {
          title: 'Weekly email newsletter',
          starter: '<span class="check-pink"></span>',
          pro: '<span class="check-orange"></span>',
          proTeam: '<span class="check-orangered"></span>'
        },
        {
          title: 'Models rankings',
          starter: '<span class="check-pink"></span>',
          pro: '<span class="check-orange"></span>',
          proTeam: '<span class="check-orangered"></span>'
        },
        {
          title: 'Notifications from your favorites',
          starter: '<span class="check-pink"></span>',
          pro: '<span class="check-orange"></span>',
          proTeam: '<span class="check-orangered"></span>'
        }
      ]
    },
    {
      header: {
        title: 'Be Seen. Manage your Brand.'
      },
      rows: [
        {
          title: 'News, Trends and interviews',
          starter: '',
          pro: '<span class="check-orange"></span>',
          proTeam: '<span class="check-orangered"></span>'
        },
        {
          title: 'Weekly email newsletter',
          starter: '',
          pro: '<span class="check-orange"></span>',
          proTeam: '<span class="check-orangered"></span>'
        },
        {
          title: 'Models rankings',
          starter: '',
          pro: '',
          proTeam: '<span class="check-orangered"></span>'
        },
        {
          title: 'Notifications from your favorites',
          starter: '',
          pro: '',
          proTeam: '<span class="check-orangered"></span>'
        }
      ]
    }
  ]

  // Plans header
  const thead = document.createElement('thead')
  thead.className = 'sb-table__main-header'
  const tr = document.createElement('tr')
  const th = document.createElement('th')
  tr.appendChild(th)
  plans.forEach((plan) => {
    const planTh = document.createElement('th')

    const planDiv = document.createElement('div')
    planDiv.className = 'sb-table__plan-header'
    const planTitle = document.createElement('h3')
    planTitle.className = addClasses(['sb-title', plan.pro ? 'sb-title--pro' : ''])
    planTitle.textContent = plan.title
    const planSubtitle = document.createElement('p')
    planSubtitle.textContent = plan.subtitle
    planSubtitle.className = 'sb-subtitle'
    const planButton = createButton({ label: plan.buttonLabel, onClick: plan.buttonClick })
    planButton.className = addClasses([planButton.className, `sb-button--${plan.buttonColor}`])
    planDiv.appendChild(planTitle)
    planDiv.appendChild(planSubtitle)
    planDiv.appendChild(planButton)

    planTh.appendChild(planDiv)
    tr.appendChild(planTh)
  })
  thead.appendChild(tr)
  table.appendChild(thead)

  // Table Sections
  sections.forEach((section, index) => {
    // Header
    const thead = document.createElement('thead')
    const tr = document.createElement('tr')
    const th = document.createElement('th')
    th.textContent = section.header.title
    th.setAttribute('colspan', plans.length + 1)
    tr.appendChild(th)
    thead.appendChild(tr)
    table.appendChild(thead)

    // Body
    const tbody = document.createElement('tbody')

    section.rows.forEach((row, i) => {
      const bodyRow = document.createElement('tr')
      const firstCell = document.createElement('td')
      firstCell.textContent = row.title
      bodyRow.appendChild(firstCell)

      plans.forEach((plan) => {
        const planCell = document.createElement('td')
        planCell.innerHTML = row[plan.id]
        bodyRow.appendChild(planCell)
      })

      if (index === sections.length - 1 && i === section.rows.length - 1) {
        bodyRow.className = 'sb-table__last-row'
      }

      tbody.appendChild(bodyRow)
    })

    table.appendChild(tbody)
  })

  tableWrapper.appendChild(table)

  return tableWrapper
}
