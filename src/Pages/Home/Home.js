import { TextField ,Button,MenuItem} from "@mui/material";


import "./Home.css";
import Categories from "../../Data/Categories";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const Home = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState(" ");
  const [difficulty, setDifficulty] = useState(" ");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      navigate("/quiz");
    }
  };

  return (
    <div className="content">
      <div className="settings">
        <span style={{ fonrSize: 35 }}> Quiz Settings</span>

        <div className="settings_s">
          {error && (
            <ErrorMessage> You need to fill all the feilds</ErrorMessage>
          )}

          <TextField
            style={{ marginBottom: 35 }}
            label="Type your name here"
            variant="standard"
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            style={{ marginBottom: 35 }}
            select
            label="Select Quiz Category"
            variant="standard"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {Categories.map((e) => (
              <MenuItem key={e.category} value={e.value}>
                {" "}
                {e.category}{" "}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            style={{ marginBottom: 35 }}
            select
            label="Select Difficulty"
            variant="standard"
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem key="Eeasy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>

          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            
            Start the Quiz
          </Button>
        </div>
      </div>

      <img src="../img3.png" className="banner" alt="img" />
    </div>
  );
};

export default Home;