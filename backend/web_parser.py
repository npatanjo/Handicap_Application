

from bs4 import BeautifulSoup
import requests
import re

class Golf_Course:

    def __init__(self, name):
        self.name = name



def main():
    html = get_html("https://ncrdb.usga.org/courseTeeInfo.aspx?CourseID=2711")
    scrape_html(html)
    pass



def get_html(url):
    return requests.get(url).text
    pass

def scrape_html(html):
    print(html)
    pass




if __name__ == "__main__":
    main()
