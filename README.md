NOTE: No working API key is used in this project and only dummy responses will be returned.
# AI-Powered Personal Tutor

## Overview
This project is an AI-powered personal tutor designed to help students cram efficiently by spoon-feeding small amounts of information. The system presents information in digestible chunks, allowing for quick and effective learning.

## Features
- **AI-Based Content Delivery**: The tutor provides bite-sized explanations based on selected topics.
- **Adaptive Learning**: Adjusts difficulty and content based on user responses.
- **Topic Filtering**: Users can select specific subjects and focus areas.
- **Interactive Q&A**: AI-generated quizzes help reinforce learning.
- **Progress Tracking**: Tracks user performance and suggests review material.

## Tech Stack
- **Frontend**: React (JavaScript/TypeScript)
- **Backend**: FastAPI (Python)
- **Database**: PostgreSQL (Render-hosted)
- **Hosting**: Render (for both frontend and backend)
- **Authentication**: JSON Web Tokens (JWT)
- **AI Integration**: OpenAI API for content generation

## Setup Instructions
### 1. Clone the Repository
```sh
git clone https://github.com/yourusername/tutor-repo.git
cd tutor-repo
```

### 2. Backend Setup
#### Install Dependencies
```sh
cd backend
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
pip install -r requirements.txt
```

#### Set Environment Variables
Create a `.env` file in the `backend` directory:
```ini
OPENAI_API_KEY=your_api_key
DATABASE_URL=your_database_url
SECRET_KEY=your_secret_key
```

#### Run Backend Server
```sh
uvicorn main:app --host=0.0.0.0 --port=8000
```

### 3. Frontend Setup
#### Install Dependencies
```sh
cd frontend
npm install
```

#### Set Environment Variables
Create a `.env` file in the `frontend` directory:
```ini
REACT_APP_API_BASE_URL=http://localhost:8000
```

#### Run Frontend Server
```sh
npm start
```

### 4. Deployment
#### Backend Deployment (Render)
- Create a new **Web Service** on Render.
- Set the **start command** in `Procfile`:
  ```plaintext
  web: uvicorn main:app --host=0.0.0.0 --port=$PORT
  ```
- Add environment variables in the Render dashboard.

#### Frontend Deployment (Render or Vercel)
- Deploy via Vercel:
  ```sh
  npm run build
  vercel deploy
  ```
- Ensure the backend URL in `.env` matches the deployed API.

## API Endpoints
### Authentication
- `POST /auth/signup` - Register a new user
- `POST /auth/login` - Authenticate user and return JWT

### Learning
- `GET /topics` - Fetch available topics
- `POST /learn` - Fetch spoon-fed content for a topic

### User Progress
- `GET /progress` - Fetch learning progress
- `POST /progress/update` - Update user progress

## Contributing
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit changes (`git commit -m 'Add feature'`).
4. Push to your branch (`git push origin feature-name`).
5. Open a pull request.

## License
This project is licensed under the MIT License.

---
