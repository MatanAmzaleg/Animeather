import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader 
    speed={2}
    // width={auto}
    viewBox="0 0 500 160"
    backgroundColor="#999999"
    foregroundColor="#c5c4c4"
    {...props}
  >
    <rect x="3" y="1" rx="3" ry="3" width="37" height="154" /> 
    <rect x="59" y="3" rx="3" ry="3" width="262" height="15" /> 
    <rect x="344" y="18" rx="9" ry="9" width="72" height="138" />
  </ContentLoader>
)

export default MyLoader