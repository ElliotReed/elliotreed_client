import React from "react"

function setCopyright() {
	const date = new Date();
	const year = date.getFullYear();

	return `Copyright \u00A9 ${year} by Elliot Reed`;
}
const Copyright = () => {
  return <p>{setCopyright()}</p>
}

export default Copyright
