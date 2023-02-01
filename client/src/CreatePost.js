import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";

function CreatePost() {
    const navigate = useNavigate();
    const [post, setPost] = useState({
        user: "",
        email: "",
    });
    const handleChange = (event) => {
        const { name, value } = event.target;

        setPost((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
        // console.log(event.target);
    };

    const handleClick = (event) => {
        event.preventDefault();
        axios.post("/create", post)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));

        navigate("posts");
    }

    // useEffect(() => {
    //     console.log(post);
    // }, [post]);

    return (
        <div style={{ width: "90%", margin: "auto auto", textAlign: "center" }}>
            <h1>Create Test</h1>
            <Form>
                <Form.Group>
                    <Form.Control
                        name='user'
                        value={post.user}
                        placeholder='user'
                        style={{ marginBotton: "1rem" }}
                        onChange={handleChange}
                    />
                    <Form.Control
                        name='email'
                        placeholder='email'
                        value={post.email}
                        style={{ marginBotton: "1rem" }}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button
                    style={{ width: "100%" }}
                    variant="outline-success"
                    onClick={handleClick}
                >
                    Create
                </Button>
            </Form>
            <Button
                style={{ width: "100%" }}
                variant="outline-dark"
                onClick={() => navigate(-1)}
            >
                BACK
            </Button>
        </div>
    );
}

export default CreatePost