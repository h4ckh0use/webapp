const WEBHOOK_URL = 'hackhouse-backend.herokuapp.com/'

export default () => {
  console.log('Websocket inited')
  window.ws = new WebSocket(`wss://${WEBHOOK_URL}`)
  const ws = window.ws
  ws.onopen = () => {
    // ws.send(JSON.stringify({ message: 'Someone joined' }))
    console.log('Websocket connected')
  }

  // extension calls this
  window.addEventListener(
    'message',
    (event) => {
      if (event.data?.type === 'from_extension') {
        console.log(event)
      }
    },
    false
  )

  return ws
}
