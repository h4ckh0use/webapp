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
        window.ws.send(
          JSON.stringify({
            broadcast: true,
            emergency: true,
            user: window.user,
            message: `${window.user} visited ${data.url}`,
          })
        )
        console.log(event.data)
      }
    },
    false
  )

  return ws
}
