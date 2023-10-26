import './styles.css'

export const LayoutComponents = (props) => {
    return (
        <div className="container">
        <style>@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');</style>
            <div className="container-login">
                <div className="wrap-login">
                    {props.children}
            </div>
        </div>
    </div>
    )
}