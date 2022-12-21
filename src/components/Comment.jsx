import React from 'react'

const Comment = () => {
  return (
    <div className="comment">
      <form>
        <div className="form-input">
          <textarea name="" id="" placeholder="Add a comment"></textarea>
        </div>
        <div className="left">
          <button className="button">
            send
          </button>
        </div>
      </form>
    </div>
  )
}

export default Comment