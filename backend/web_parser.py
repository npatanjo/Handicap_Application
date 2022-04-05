

from bs4 import BeautifulSoup
import requests
import re
import json


def main():
    html = get_html("https://ncrdb.usga.org/courseTeeInfo.aspx?CourseID=2711")
    soup = BeautifulSoup(html.content, 'html.parser')
    course_obj = create_course_obj(soup)
    dump_to_json_file(course_obj)

"""
Creates a new Golf_Course object with the name from the html
"""
def create_course_obj(soup):
    name = soup.table.td.text
    s = soup.find("table", id="gvTee")
    content = s.find_all('td')

    arr = []

    for i in content:
        arr.append(i.text.replace(" ", "").replace("\n", "").replace("\r", ""))
    i = 0
    ret_arr = []
    while i < len(arr)/8:
        ret_arr.append({
            "color" : arr[0],
            "gender" : arr[1],
            "par" : arr[2],
            "course_rating_18" : arr[3],
            "bogey_rating_18" : arr[4],
            "slope_rating_18" : arr[5],
            "front_9" : arr[6],
            "back_9" : arr[7],
            })
        arr = arr[8:]
    ret_map = {}
    ret_map["course_name"] = name
    ret_map["course_ratings"] = ret_arr
    return ret_map

def get_html(url):
    return requests.get(url)


def dump_to_json_file(course_map):
    with open("BACKING_FILE", "w") as f:
        f.write(json.dumps(course_map, indent=2))



if __name__ == "__main__":
    main()
