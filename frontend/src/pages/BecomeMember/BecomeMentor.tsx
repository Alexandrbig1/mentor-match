import React from 'react'

const BecomeAMentor: React.FC = () => {
  return (
    <div style={{ padding: 24 }}>
      <h1>Become a mentor</h1>
      <p>Fill out the form below to apply as a mentor.</p>
      <form>
        <div>
          <label>Topic</label>
          <input name="topic" />
        </div>
        <div>
          <label>Bio</label>
          <textarea name="bio" />
        </div>
        <button type="submit">Submit application</button>
      </form>
    </div>
  )
}

export default BecomeAMentor
