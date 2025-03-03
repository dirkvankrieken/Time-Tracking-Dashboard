const dailyButton = document.getElementById('daily')
const weeklyButton = document.getElementById('weekly')
const monthlyButton = document.getElementById('monthly')

const workHours = document.getElementById('work-hours')
const workPreviousHours = document.getElementById('work-previous-hours')

const playHours = document.getElementById('play-hours')
const playPreviousHours = document.getElementById('play-previous-hours')

const studyHours = document.getElementById('study-hours')
const studyPreviousHours = document.getElementById('study-previous-hours')

const exerciseHours = document.getElementById('exercise-hours')
const exercisePreviousHours = document.getElementById('exercise-previous-hours')

const socialHours = document.getElementById('social-hours')
const socialPreviousHours = document.getElementById('social-previous-hours')

const selfCareHours = document.getElementById('self-care-hours')
const selfCarePreviousHours = document.getElementById(
  'self-care-previous-hours'
)

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
    updateHours(json, 'daily')
  } catch (error) {
    console.error('Error fetching data:', error)
  }
  dailyButton.classList.add('text-white')
  weeklyButton.classList.remove('text-white')
  monthlyButton.classList.remove('text-white')
}

async function weeklyButtonClicked(e) {
  try {
    const response = await fetch('data.json')
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }
    const json = await response.json()
    updateHours(json, 'weekly')
  } catch (error) {
    console.error('Error fetching data:', error)
  }
  weeklyButton.classList.add('text-white')
  dailyButton.classList.remove('text-white')
  monthlyButton.classList.remove('text-white')
}

async function monthlyButtonClicked(e) {
  try {
    const response = await fetch('data.json')
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }
    const json = await response.json()
    updateHours(json, 'monthly')
  } catch (error) {
    console.error('Error fetching data:', error)
  }
  monthlyButton.classList.add('text-white')
  weeklyButton.classList.remove('text-white')
  dailyButton.classList.remove('text-white')
}

weeklyButtonClicked()

function updateHours(json, type) {
  const workHoursData = json.find((item) => item.title === 'Work')
  let prefix
  if (type === 'daily') {
    prefix = 'Yesterday: '
  } else if (type === 'weekly') {
    prefix = 'Last Week: '
  } else {
    prefix = 'Last Month: '
  }
  if (workHoursData) {
    workHours.innerHTML = workHoursData.timeframes[type].current + ' hrs'
    workPreviousHours.innerHTML =
      prefix + workHoursData.timeframes[type].previous + ' hrs'
  }
  const playHoursData = json.find((item) => item.title === 'Play')
  if (playHoursData) {
    playHours.innerHTML = playHoursData.timeframes[type].current + ' hrs'
    playPreviousHours.innerHTML =
      prefix + playHoursData.timeframes[type].previous + ' hrs'
  }
  const studyHoursData = json.find((item) => item.title === 'Study')
  if (studyHoursData) {
    studyHours.innerHTML = studyHoursData.timeframes[type].current + ' hrs'
    studyPreviousHours.innerHTML =
      prefix + studyHoursData.timeframes[type].previous + ' hrs'
  }
  const exerciseHoursData = json.find((item) => item.title === 'Exercise')
  if (exerciseHoursData) {
    exerciseHours.innerHTML =
      exerciseHoursData.timeframes[type].current + ' hrs'
    exercisePreviousHours.innerHTML =
      prefix + exerciseHoursData.timeframes[type].previous + ' hrs'
  }
  const socialHoursData = json.find((item) => item.title === 'Social')
  if (socialHoursData) {
    socialHours.innerHTML = socialHoursData.timeframes[type].current + ' hrs'
    socialPreviousHours.innerHTML =
      prefix + socialHoursData.timeframes[type].previous + ' hrs'
  }
  const selfCareHoursData = json.find((item) => item.title === 'Self Care')
  if (selfCareHoursData) {
    selfCareHours.innerHTML =
      selfCareHoursData.timeframes[type].current + ' hrs'
    selfCarePreviousHours.innerHTML =
      prefix + selfCareHoursData.timeframes[type].previous + ' hrs'
  }
}
