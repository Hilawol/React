import react from 'react'
import Box4 from './Box4'

class Box3 extends react.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="box3">
      <Box4 />
      <Box4 />
    </div>
  }
}

export default Box3;