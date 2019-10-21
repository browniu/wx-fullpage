import React, {Component} from 'react'

import styles from './styles.css'

const ref = React.createRef()
export default class ExampleComponent extends Component {
  componentDidMount() {
    const listener = () => {
      const dom = ref.current
      dom.play()
      // document.body.removeEventListener('click', listener)
    }
    document.body.addEventListener('click', listener)
  }

  render() {
    const {
      children
    } = this.props

    return (
      <div className={styles.root}>
        <div className={styles.main}>
          {children}
        </div>
        <div className={styles.videoBox}>
          <video
            className={styles.video}
            ref={ref}
            x5-video-player-fullscreen='true'
            x5-video-player-type='h5'
            x5-video-orientation='landscape'
            loop muted preload='auto'
            airplay='allow'
            playsInline
            src='https://static.jx3.xoyo.com/gfsj/20181201/2plxj.mp4'/>
        </div>

      </div>
    )
  }
}
