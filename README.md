# Silent Voice

## Learn to Communicate with Your Hands

Silent Voice is a web application that helps people with hearing disabilities communicate with others. It's a sign language translator that converts sign language to text using a webcam. The model server is created using FastAPI.

### Server Setup

- Create a virtual environment:
```bash
python -m venv venv
```
- Activate the virtual environment:
```bash
source venv/bin/activate # Linux

.\venv\Scripts\activate # Windows
```

- Install the dependencies:
```bash
pip install mediapipe opencv-python tensorflow==2.15.1 fastapi uvicorn
```

- Run the server:
```bash
uvicorn server:app --reload
```

**_NOTE:_** Ensure your virtual environment is activated before running the server.