function Button({label, tarea}) {

    // const { label } = props;

    const styles = {
        margin: '0 10px'
    }

    return (
        <button onClick={() => tarea(label)} style={styles}>{label}</button>
    )
}

export default Button;