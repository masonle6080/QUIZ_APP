from funcs import addTopic, displayToday, displayTopics
from tkinter import *
from tkinter import ttk
import tkinter as tk


root = Tk()
root.title("Quiz App")

frame = ttk.Frame(root)
frame.pack(side='top', padx=30)

today = ttk.Label(frame, text="today", font=("SF Pro", 20))
today.pack(pady=(20,0))

entry = ttk.Entry(frame, width=20)
entry.pack(side="left", pady=20, padx=20)

button = ttk.Button(frame, text="add", command=lambda: addTopic(entry, todayTopicsFrame))
button.pack(side="left", pady=20, padx=20)


todayTopicsFrame = tk.Frame(root, background="#434342")
todayTopicsFrame.pack(side='top', pady=20)

displayTopics(todayTopicsFrame)


root.mainloop()

