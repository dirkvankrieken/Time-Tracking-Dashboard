const dailyButton = document.getElementById('daily')
const weeklyButton = document.getElementById('weekly')
const monthlyButton = document.getElementById('monthly')

const workHours = document.getElementById('work-hours')
const workLastWeekHours = document.getElementById('work-lastwk-hours')

dailyButton.addEventListener('click', dailyButtonClicked)
weeklyButton.addEventListener('click', weeklyButtonClicked)
monthlyButton.addEventListener('click', monthlyButtonClicked)

async function dailyButtonClicked(e) {
  try {
    const response = await fetch('data.json')
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }
    const json = await response.json()
    updateWorkHours(json)
    console.log(json)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
  console.log('daily view')
}

function weeklyButtonClicked(e) {
  workHours.innerHTML = '32 hrs'
  workLastWeekHours.innerHTML = 'Last week - 36 hours'
  console.log('weekly view')
}

function monthlyButtonClicked(e) {
  console.log('monthly view')
}

dailyButtonClicked()

// async function fetchData() {
//   try {
//     const response = await fetch('data.json')
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`)
//     }
//     const json = await response.json()
//     return json
//   } catch (error) {
//     console.error(error.message)
//   }
// }

function updateWorkHours(json) {
  workHours.innerHTML = '32 hrs'
  workLastWeekHours.innerHTML = 'Last week - 36 hours'
}
