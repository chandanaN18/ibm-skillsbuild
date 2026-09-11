# Course Content Simplification Agent

An AI-powered educational application that simplifies academic and course content based on the learner's proficiency level.

## Supported Proficiency Levels

| Level | Description |
|---|---|
| **Beginner** | Simple language, everyday analogies, no assumed prior knowledge |
| **Intermediate** | Moderate detail, some domain vocabulary introduced |
| **Advanced** | Technical depth, domain terminology used freely |
| **Expert** | Full academic/professional depth, assumes deep prior knowledge |

---

## Project Structure

```
course-content-simplification-agent/
│
├── frontend/               # User interface (HTML, CSS, JavaScript)
│   ├── index.html          # Main page
│   ├── style.css           # Stylesheet
│   └── script.js           # Frontend logic
│
├── backend/                # Server-side logic (Python / Flask)
│   ├── app.py              # Flask application entry point
│   └── requirements.txt    # Python dependencies
│
├── adk/                    # Agent Development Kit assets (future use)
│
├── screenshots/            # App screenshots for documentation
│
├── README.md               # Project documentation (this file)
└── .gitignore              # Files and folders excluded from Git
```

---

## Getting Started

### Prerequisites

- Python 3.9 or higher
- A modern web browser

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd course-content-simplification-agent
```

### 2. Set Up the Backend

```bash
cd backend
pip install -r requirements.txt
python app.py
```

The Flask server will start at `http://localhost:5000`.

### 3. Open the Frontend

Open `frontend/index.html` directly in your browser, or serve it with a simple HTTP server:

```bash
# From the project root
python -m http.server 8080
```

Then visit `http://localhost:8080/frontend/`.

---

## How It Works (Overview)

1. The user pastes course content into the text area.
2. The user selects their proficiency level.
3. The frontend sends the content and level to the Flask backend (`POST /simplify`).
4. The backend processes the request using an AI model and returns simplified text.
5. The simplified content is displayed back to the user.

---

## Roadmap

-  Project structure and starter files
-  Backend placeholder route (`/simplify`)
-  IBM Granite / watsonx AI integration
-  Proficiency-level prompt engineering
-  Improved UI / response formatting
-  Deployment

---

## License

This project is for educational purposes.
