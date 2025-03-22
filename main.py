from fastapi import FastAPI, HTTPException, UploadFile, File
from pydantic import BaseModel
import mysql.connector
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI()

# MySQL Configuration
db_config = {
    "host": "localhost",
    "user": "root",
    "password": "simranarora08",
    "database": "techno_clubs"
}

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Function to Get a New Database Connection
def get_db_connection():
    return mysql.connector.connect(**db_config)

# Pydantic Models
class Event(BaseModel):
    event_name: str
    event_date: str
    venue: str
    description: str
    event_image: str

class Announcement(BaseModel):
    announcement_text: str
class UserDetails(BaseModel):
    full_name: str
    email: str
    student_id: str
    phone_number: str
    interface_language:str
    time_zone: str
    profile_picture: str
class UserProfile(BaseModel):
    full_name: str
    email: str
    student_id: str
    phone_number: str
    interface_language: str
    time_zone: str
    profile_picture: str
@app.post("/create-user/")
async def create_user(user: UserDetails):
    try:
        connection = get_db_connection()
        cursor = connection.cursor()
        query = """
            INSERT INTO user_details 
            (full_name, email, student_id, phone_number, interface_language, time_zone, profile_picture) 
            VALUES (%s, %s, %s, %s, %s, %s, %s)
        """
        cursor.execute(query, (
            user.full_name, user.email, user.student_id, user.phone_number,
            user.interface_language, user.time_zone, user.profile_picture
        ))
        connection.commit()
        cursor.close()
        connection.close()
        return {"message": "User profile created successfully!"}
    except mysql.connector.IntegrityError:
        raise HTTPException(status_code=400, detail="User with this email or student ID already exists.")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Server error: {str(e)}")
    
# API to Create a New Announcement
@app.post("/create_announcement/")
async def create_announcement(announcement: Announcement):
    try:
        connection = get_db_connection()
        cursor = connection.cursor()
        query = "INSERT INTO announcements (announcement_text) VALUES (%s)"
        cursor.execute(query, (announcement.announcement_text,))
        connection.commit()
        cursor.close()
        connection.close()
        return {"message": "Announcement created successfully!"}
    except mysql.connector.Error as db_err:
        raise HTTPException(status_code=500, detail=f"Database error: {str(db_err)}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Server error: {str(e)}")

# API to Fetch All Announcements
@app.get("/announcements/")
async def get_announcements():
    try:
        connection = get_db_connection()
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT * FROM announcements ORDER BY created_at DESC")
        announcements = cursor.fetchall()
        cursor.close()
        connection.close()
        return {"announcements": announcements}
    except mysql.connector.Error as db_err:
        raise HTTPException(status_code=500, detail=f"Database error: {str(db_err)}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Server error: {str(e)}")

# API to Create a New Event
@app.post("/create_event/")
async def create_event(event: Event):
    try:
        connection = get_db_connection()
        cursor = connection.cursor()
        query = """
            INSERT INTO events (event_name, event_date, venue, description, event_image) 
            VALUES (%s, %s, %s, %s, %s)
        """
        cursor.execute(query, (event.event_name, event.event_date, event.venue, event.description, event.event_image))
        connection.commit()
        cursor.close()
        connection.close()
        return {"message": "Event created successfully!"}
    except mysql.connector.Error as db_err:
        raise HTTPException(status_code=500, detail=f"Database error: {str(db_err)}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Server error: {str(e)}")

# API to Fetch All Events
@app.get("/events/")
async def get_events():
    try:
        connection = get_db_connection()
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT * FROM events")
        events = cursor.fetchall()
        cursor.close()
        connection.close()
        return {"events": events}
    except mysql.connector.Error as db_err:
        raise HTTPException(status_code=500, detail=f"Database error: {str(db_err)}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Server error: {str(e)}")

# API to Create a New User Profile
@app.post("/create-profile/")
async def create_profile(profile: UserProfile):
    try:
        connection = get_db_connection()
        cursor = connection.cursor()
        query = """
            INSERT INTO user_profiles 
            (full_name, email, student_id, phone_number, interface_language, time_zone, profile_picture) 
            VALUES (%s, %s, %s, %s, %s, %s, %s)
        """
        cursor.execute(query, (
            profile.full_name, profile.email, profile.student_id, profile.phone_number,
            profile.interface_language, profile.time_zone, profile.profile_picture
        ))
        connection.commit()
        cursor.close()
        connection.close()
        return {"message": "Profile created successfully!"}
    except mysql.connector.IntegrityError:
        raise HTTPException(status_code=400, detail="Profile with this email or student ID already exists.")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Server error: {str(e)}")

# API to Fetch a User Profile by Email
@app.get("/profile/{email}")
async def get_profile(email: str):
    try:
        connection = get_db_connection()
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT full_name FROM user_profiles WHERE email = %s", (email,))
        profile = cursor.fetchone()
        cursor.close()
        connection.close()
        if not profile:
            raise HTTPException(status_code=404, detail="Profile not found")
        return {"profile": profile}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
# API to Fetch All User Profiles
@app.get("/user_profiles/")
async def get_all_profiles():
    try:
        connection = get_db_connection()
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT * FROM user_profiles")
        profiles = cursor.fetchall()
        cursor.close()
        connection.close()
        return {"profiles": profiles}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# API to Fetch Requests
@app.get("/requests")
def get_requests():
    try:
        connection = get_db_connection()
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT * FROM requests")
        requests = cursor.fetchall()
        cursor.close()
        connection.close()
        return {"requests": requests}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# API to Upload JSON File and Insert Requests
@app.post("/upload-json")
async def upload_json(file: UploadFile = File(...)):
    try:
        contents = await file.read()
        data = json.loads(contents.decode("utf-8"))  # Decode properly

        connection = get_db_connection()
        cursor = connection.cursor()

        for request in data:
            cursor.execute(
                "INSERT INTO requests (student_name, club_name, request_date, status) VALUES (%s, %s, %s, %s)",
                (request["student_name"], request["club_name"], request["request_date"], "Pending")
            )

        connection.commit()
        cursor.close()
        connection.close()
        return {"message": "Requests uploaded successfully"}

    except json.JSONDecodeError:
        raise HTTPException(status_code=400, detail="Invalid JSON file format")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# API to Accept a Request
@app.put("/accept-request/{request_id}")
def accept_request(request_id: int):
    try:
        connection = get_db_connection()
        cursor = connection.cursor()
        cursor.execute("UPDATE requests SET status = 'Accepted' WHERE id = %s", (request_id,))
        connection.commit()
        cursor.close()
        connection.close()
        return {"message": "Request accepted"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# API to Delete a Request
@app.delete("/delete-request/{request_id}")
def delete_request(request_id: int):
    try:
        connection = get_db_connection()
        cursor = connection.cursor()
        cursor.execute("DELETE FROM requests WHERE id = %s", (request_id,))
        connection.commit()
        cursor.close()
        connection.close()
        return {"message": "Request deleted"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
