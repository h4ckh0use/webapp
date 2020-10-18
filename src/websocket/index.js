import { db } from '../utility/firebase'
const WEBHOOK_URL = 'hackhouse-backend.herokuapp.com/'

export default () => {
  console.log('Websocket inited')
  window.ws = new WebSocket(`wss://${WEBHOOK_URL}`)
  const ws = window.ws
  ws.onopen = () => {
    ws.send(JSON.stringify({ message: 'Someone joined' }))
    console.log('Websocket connected')
  }

  // extension calls this
  window.addEventListener(
    'message',
    (event) => {
      const data = event.data
      if (data.type === 'from_extension') {
        db.collection('room')
          .doc('kvOJ1KrHegxsTyM5AONv')
          .get()
          .then((d) => d.data())
          .then((d) => {
            if (d.active) {
              window.ws.send(
                JSON.stringify({
                  broadcast: true,
                  emergency: true,
                  user: window.user,
                  message: `${window.user} visited ${data.url}`,
                })
              )
            }
          })
        console.log(event.data)
      }
    },
    false
  )

  return ws
}
