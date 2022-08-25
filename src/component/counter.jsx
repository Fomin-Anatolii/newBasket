import React from "react"

const Counter = (props) => {
  const { value, id } = props

  const formatValue = () => {
    return value === 0 ? "empty" : value
  }

  const getBadgeClasses = () => {
    let classes = "badge m-2 "
    return (classes += value !== 0 ? "bg-primary" : "bg-warning")
  }

  return (
    <div>
      <span>{props.name}</span>
      <span className={getBadgeClasses()}>{formatValue()}</span>
      <button className="btn btn-primary btn-sm m-2" onClick={() => props.onIncrement(id)}>
        +
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={() => props.onDecrement(id)}>
        -
      </button>
      <button className="btn btn-sm btn-danger m-1" onClick={() => props.onDelete(id)}>
        Delete
      </button>
    </div>
  )
}

export default Counter
