import json
import random
from fastapi import FastAPI
import socketio
from datetime import datetime, timedelta

sio = socketio.AsyncServer(
    async_mode="asgi",
    cors_allowed_origins=["http://localhost:3000"]  # Frontend's origin
)


with open("data/data.json", "r") as file:
    data = json.load(file)


app = FastAPI()
app.mount("/", socketio.ASGIApp(sio))

def random_datetime(start, end):
    delta = end - start
    int_delta = int(delta.total_seconds())

    random_second = random.randint(0, int_delta)
    random_date = start + timedelta(seconds=random_second)

    return random_date.strftime("%Y-%m-%d %H:%M:%S")

@sio.event
async def connect(sid, environ):
    global random_data
    random_data = []
    print(f"Client connected: {sid}")
    random_data1 = random.sample(data, min(10, len(data)))
    for i in random_data1:
            start_date = datetime(2024, 1, 1, 0, 0, 0)  # Jan 1, 2024
            end_date = datetime(2024, 12, 31, 23, 59, 59)  # Dec 31, 2024
            random_dt = random_datetime(start_date, end_date)
            k={
                "Robot_ID": i["Robot ID"], 
                "Online_Status": i["Online/Offline"],  
                "Battery_Percentage": random.randint(0, 100),  
                "CPU_Usage": random.randint(0, 100), 
                "RAM_Consumption": random.randint(0, 100),  
                "Last_Updated": random_dt,
                "Location_Coordinates": [
                    round(random.uniform(20, 30), 6),  
                    round(random.uniform(20, 30), 6), 
                ],
            }
            random_data.append(k)

@sio.event
async def get_random_data(sid):
    if(random_data):
        robots_data=[]
        for i in random_data:
            start_date = datetime(2024, 1, 1, 0, 0, 0)  # Jan 1, 2024
            end_date = datetime(2024, 12, 31, 23, 59, 59)  # Dec 31, 2024
            random_dt = random_datetime(start_date, end_date)
            k={
                "Robot_ID": i["Robot_ID"], 
                "Online_Status": i["Online_Status"],  
                "Battery_Percentage": random.randint(0, 100),  
                "CPU_Usage": random.randint(0, 100), 
                "RAM_Consumption": random.randint(0, 100),  
                "Last_Updated": random_dt,
                "Location_Coordinates": [
                    round(random.uniform(-90, 90), 6),  
                    round(random.uniform(-180, 180), 6), 
                ],
            }
            robots_data.append(k)
        
    await sio.emit("random_data", robots_data, to=sid)

# Handle socket disconnection
@sio.event
async def disconnect(sid):
    print(f"Client disconnected: {sid}")
