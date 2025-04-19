from funcs import addTopic, displayToday, displayTopics, refreshTodayTopics
from tkinter import *
from tkinter import ttk
import tkinter as tk


root = Tk()
root.title("Quiz App")

# FRAME WINDOW
frame = ttk.Frame(root)
frame.pack(side='top', padx=30)

# TODAY
todayFrame = tk.Frame(root)
todayFrame.pack(expand=True)

today = ttk.Label(todayFrame, text="today", font=("SF Pro", 20))
today.pack(pady=(20,0))

    #NEW TOPIC
newTopicFrame = tk.Frame(todayFrame)
newTopicFrame.pack()

entry = ttk.Entry(newTopicFrame, width=20)
entry.pack(side="left", pady=20, padx=20)

button = ttk.Button(newTopicFrame, text="add", command=lambda: addTopic(entry, todayTopicsFrame))
button.pack(side="left", pady=20, padx=20)

    #scrolling canvas

todayTopicsCanvas = tk.Canvas(todayFrame, height = 200, width=300, background="#000000")
todayTopicsCanvas.pack(side="left", fill="both", expand=True)

todayTopicsScrollbar = ttk.Scrollbar(todayFrame, orient="vertical", command=todayTopicsCanvas.yview)
todayTopicsScrollbar.pack(side="right", fill="y")

todayTopicsFrame = tk.Frame(todayTopicsCanvas, background="#000000")
todayTopicsCanvas.create_window((0, 0), window=todayTopicsFrame, anchor="n")

todayTopicsCanvas.configure(yscrollcommand=todayTopicsScrollbar.set)

def on_frame_configure(event):
    todayTopicsCanvas.configure(scrollregion=todayTopicsCanvas.bbox("all"))

todayTopicsFrame.bind("<Configure>", on_frame_configure)

#testLabel = tk.Label(todayTopicsFrame, text='hi')
#testLabel.pack(pady=10)


refreshTodayTopics(todayTopicsFrame)

#displayTopics(todayTopicsFrame)


root.mainloop()

