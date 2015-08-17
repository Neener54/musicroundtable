import React  from 'react'

export default React.createClass({
  displayName: 'IndexPage',

  propTypes: {
    name: React.PropTypes.string
  },

  render () {
    return (
      <div>
        Hello {this.props.name}
        <h1>This is how we do it</h1>
      </div>
      )
  }
})
