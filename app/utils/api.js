// Import React components
import axios from 'axios'

// ERROR HANDLING
const handleError = error => {
  console.warn(error)
  return null
}

export default {
  fetchPageData: pageID => (
    axios.get('../pages.json')
      .then(pages => (pages.data)[pageID])
      .catch(handleError)
  )
}
