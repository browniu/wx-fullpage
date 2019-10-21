import React, {Component} from 'react'

import Fullpage from 'wx-fullpage'

export default class App extends Component {
  render() {
    return (
      <div>
        <Fullpage>
          <div className='main'>
            <div className='button' />
          </div>
        </Fullpage>
      </div>
    )
  }
}
