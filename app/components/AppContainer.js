// Import React components
import React, { useContext, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

// Import custom components
import { Context } from './Context'

function AppContainer (props) {
  const { isChecked, setIsChecked } = useContext(Context)

  useEffect(
    () => {
      const unlisten = props.history.listen((location, action) => {
        setIsChecked('')
        console.log({action})
      });
      return () => {
        unlisten();
      };
    },
    []
  );

  return (
    <div className="l-site-container">
      {props.children}
    </div>
  )
}

// class AppContainer extends React.Component {
//   componentWillMount() {
//     this.unlisten = this.props.history.listen((location, action) => {
//       console.log("on route change")
//     })
//   }
//   componentWillUnmount() {
//     this.unlisten()
//   }
//   render() {
//     return (
//       <div className="l-site-container">
//         {this.props.children}
//       </div>
//     )
//   }
// }


export default withRouter(AppContainer)