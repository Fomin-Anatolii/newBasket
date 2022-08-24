import React, { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)
  const [tags, setTags] = useState(["tag1", "tag2", "tag3"])

  const formatCount = () => {
    return count === 0 ? "empty" : count
  }
  const getBadgeClasses = () => {
    let classes = "badge m-2 "
    return (classes += count !== 0 ? "bg-primary" : "bg-warning")
  }
  const handleIncrement = () => {
    setCount((prevState) => prevState + 1)
  }
  const handleDecrement = () => {
    setCount((prevState) => prevState - 1)
  }

  const handleTagChange = (id) => {
    setTags((prevState) => prevState.filter((tag) => tag !== id))
  }
  const renderTags = () => {
    return (
      tags.length !== 0 &&
      tags.map((tag) => (
        <li key={tag} className="btn btn-primary btn-sm m-2" onClick={() => handleTagChange(tag)}>
          {tag}
        </li>
      ))
    )
  }

  if (tags.length !== 0) {
    return <ul>{renderTags()}</ul>
  }
  return (
    <>
      <h1 className={getBadgeClasses()}>{formatCount()}</h1>
      <button className="btn btn-primary btn-sm m-2" onClick={handleIncrement}>
        +
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={handleDecrement}>
        -
      </button>
    </>
  )
}

export default Counter
