import { COMMAND } from '../constants'
const WEBHOOK_URL = 'hackhouse-backend.herokuapp.com/'

export default () => {
  console.log('Websocket inited')
  window.ws = new WebSocket(`wss://${WEBHOOK_URL}`)
  const ws = window.ws
  ws.onopen = () => {
    ws.send(JSON.stringify({ message: 'Someone joined' }))
    console.log('Websocket connected')
  }

  const iWasBad = (website) => {
    // TODO: properly set the user object
    window.user = ''
    const user = window.user
    ws.send(
      JSON.stringify({
        user,
        command: COMMAND.EMERGENCY_MEETING,
        message: `${user} visited a bad site ${website}`,
      })
    )
  }

  window.addEventListener(
    'message',
    (event) => {
      console.log(event)
      if (event.type === 'from_extension') {
        console.log(event)
      }
    },
    false
  )

  window.iWasBad = iWasBad

  const passIWasBad = new CustomEvent('passIWasBad', { detail: iWasBad })
  document.dispatchEvent(passIWasBad)

  return ws
}
