import React from 'react'
import { EventEmitter} from 'events'
const eventBus = new EventEmitter()

// 事件总线--全局对象 event-bus
function ProFile(){
    return (
        <div>
            ProFile
            <button onClick={eventBus.emit()}>点击了profile按钮</button>
        </div>
    )
    emitE
}
function Home(){
    return (
        <div>
            Home

        </div>
    )
}
export default function App() {
  return (
    <div>App</div>
  )
}
