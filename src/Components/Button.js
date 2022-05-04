const Button = ({ to }) => {
  
    return (
        <a href={`/${to}`}>
            <button className="button">
                Go to {to === '' ? "Lostpets" : to}
            </button>
        </a>
    )
}
export default Button;