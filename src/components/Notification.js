const Notification = (props) => {
    const notification = props.notification ? `a new anecdote ${props.notification} created!` : ''
    return(
        <>{notification}</>
    )
}

export default Notification