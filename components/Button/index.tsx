const Button = ({ children }) => {
  const handleClick = () => {
    alert('Clicked')
  }
  return <button onClick={() => handleClick()}>{children}</button>
}

export default Button
