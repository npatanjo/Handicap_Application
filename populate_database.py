import json
import os
from tkinter import W

def main():
    f = open('backend/BACKING_FILE.json')

    data = json.load(f)

    for i in range(len(data)):
        os.system("curl -X POST -H 'Content-Type: application/json' -d '%s' localhost:1337/api/courses/post" % json.dumps(data[i]))
        print()
        print()

main()