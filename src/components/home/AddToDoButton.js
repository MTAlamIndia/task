import { Link } from "react-router-dom";

const AddToDoButton = () => {
    const styles = {
        button: {
            color: 'var(--white)',
            border: 0,
            padding: '12px 30px',
            borderRadius: '24px 24px 0 0',
            fontSize: 18,
            cursor: 'pointer',
            backgroundImage: 'linear-gradient(to bottom right, var(--primary) 50%, var(--secondary))',
            textAlign: 'center',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            
        }
    }

    return (
        <>
            <Link to={`${process.env.PUBLIC_URL}/add`} style={styles.button}>
                Add New Task
            </Link>
        </>
    )
}

export default AddToDoButton;