import { COMMAND } from '../constants'
const WEBHOOK_URL = '040b48f5e996.ngrok.io'

export default () => {
  console.log('Websocket inited')
  window.ws = new WebSocket(`wss://${WEBHOOK_URL}`)
  const ws = window.ws
  ws.onopen = () => {
    ws.send(JSON.stringify({ message: 'Someone joined' }))
    console.log('Websocket connected')
  }

  window.iWasBad = (website) => {
    // TODO: properly set the user object
    window.user = 'hi'
    const user = window.user
    ws.send(
      JSON.stringify({
        user,
        command: COMMAND.EMERGENCY_MEETING,
        message: `${user} visited a bad site ${website}`,
      })
    )
  }
}
