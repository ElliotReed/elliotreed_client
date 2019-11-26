import React from "react"

const Copyright = () => {
  const date = new Date()
  const year = date.getFullYear()
  const textContent = `Copyright \u00A9 ${year} by Elliot Reed`

  return <p>{textContent}</p>
}

export default Copyright
