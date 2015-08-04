import React from 'react'

export default React.createClass({
  displayName: 'Layout',
  propTypes:{
    content: React.PropTypes.any,
    description: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired
  },

  getHtml () {
    return {__html: this.props.content}
  },

  render () {
    console.log(this)
    return (
      <html className='no-js' lang=''>
        <head>
          <meta charSet='utf-8'/>
          <meta httpEquiv='x-ua-compatible' content='ie=edge' />
          <title>{this.props.title}</title>
          <meta name='description' content={this.props.description} />
          <meta name='viewport' content='width=device-width, initial-scale=1'/>
        </head>
        <body>
          test
          <div className='container' dangerouslySetInnerHTML={this.getHtml()}></div>
        </body>
      </html>
    )
  }
})
