

from bs4 import BeautifulSoup
import requests
import re
import json


def main():
    with open("BACKING_FILE", "w") as f:
        f.write("")
    for i in range(4, 200):
        print_data = []
        html = get_html("https://ncrdb.usga.org/courseTeeInfo.aspx?CourseID=" + get_url_extension(i))
        soup = BeautifulSoup(html.content, 'html.parser')
        course_obj = create_course_obj(soup)
        dump_to_json_file(course_obj, print_data)

"""
Creates a new Golf_Course object with the name from the html
"""
def create_course_obj(soup):
    name = soup.table.td.text
    s = soup.find("table", id="gvTee")
    if s is None:
        return
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


def dump_to_json_file(course_map, print_data):
    if course_map == None:
        return
    #to_add = json.dumps(course_map)
    to_add = []
    data = {}
    j = open("BACKING_FILE")
    check = True

    try:
        data = json.load(j)

    except ValueError as e:
        check = False

    if check == True:
        add = data
        add.append(course_map)
        with open("BACKING_FILE", "w") as f:
            f.write(json.dumps(add, indent=2))
    else:
        to_add.append(course_map)
        with open("BACKING_FILE", "w") as f:
            f.write(json.dumps(to_add, indent=2))



    """
    j = open("BACKING_FILE_2")
    check = True

    try:
        data = json.load(j)
    except ValueError as e:
        check = False

    if check == True:
        print_data.append(data)

    print_data.append(course_map)

    with open("BACKING_FILE_2", "w") as f:
        f.write(json.dumps(print_data, indent=2))
    """

def get_url_extension(i):
    num = str(i)
    z_count = 4 - len(num)
    ret_str = ("0" * z_count) + num
    return ret_str



if __name__ == "__main__":
    main()
