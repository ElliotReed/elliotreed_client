import React from "react"
import "./PerformanceSchedule.css"
import API from "../../utility/API"
// import Moment from "react-moment"
import Loader from "../UI/Loader"

class PerformanceSchedule extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      schedule: [],
      isLoading: false,
      error: null,
    }
  }

  componentDidMount() {
    // this.loadSchedule()
  }

  loadSchedule = () => {
    this.setState({ isLoading: true })
    API.getCurrentSchedule()
      .then(res => {
        this.setState({ schedule: res.data, isLoading: false })
      })
      .catch(error => this.setState({ error, isLoading: false }))
  }

  render() {
    const { schedule, isLoading, error } = this.state

    if (error) {
      return <p>{error.message}</p>
    }

    if (isLoading) {
      return <Loader />
    }

    return (
      <section className="event-container">
        <h5 className="performance-header">Upcoming Performances</h5>
        <hr />
        <ul>
          {schedule.map(event => {
            return (
              <li key={event.event_id}>
                <h4 className="event-title">{event.event_name}</h4>
                <p className="event-date">
                  <span>
                    {/* <Moment format="dddd, MMMM Do YYYY">
                      {event.event_date}
                    </Moment> */}
                  </span>
                  <br />
                  <span>
                    {/* <Moment format="h:mm A">{event.event_start}</Moment> */}
                  </span>
                  <span> to </span>
                  <span>
                    {/* <Moment format="h:mm A">{event.event_end}</Moment> */}
                  </span>
                </p>
              </li>
            )
          })}
        </ul>
      </section>
    )
  }
}

export default PerformanceSchedule
