import json
import os

from datetime import date

import tkinter as tk
from tkinter import ttk

    

# adds to file of topics
def addTopic(entry, todayTopicsFrame):
    today = date.today()

    if os.path.getsize('data.json') == 0:
        data = []
    else:
        with open("data.json", "r") as a:
            data = json.load(a)

    data.append({"topic": entry.get(), "date": today.strftime("%Y-%m-%d")})

    with open("data.json", "w") as file:
        json.dump(data, file, indent = 4)

    for widget in todayTopicsFrame.winfo_children():
        widget.pack_forget()


    displayTopics(todayTopicsFrame)

    entry.delete(0, tk.END)


def displayToday():
    if os.path.getsize('data.json') == 0:
        return None
    else:
        with open('data.json') as a:
            data = json.load(a)
        return data

def displayTopics(todayTopicsFrame):
    max = 6
    count = 0
    if displayToday() == None:
        return
    for topics in reversed(displayToday()):
        if count == max:
            break
        label_text = f"{topics['topic']}"
        
        topicLabel = tk.Label(todayTopicsFrame, text=label_text, bg='#434342', width=15)
        topicLabel.pack(pady=10)
        count += 1