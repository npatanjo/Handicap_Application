import json
import os

def main():
    f = open('backend/BACKING_FILE.json')

    data = json.load(f)

    for i in range(0, 2):
        os.system("curl -X -H 'Content-Type: application/json' -d '%s' http://localhost:1337/api/courses/post" % data)

main()